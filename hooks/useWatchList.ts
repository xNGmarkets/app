import { queryClient } from "@/context/providers";
import { StockProps } from "@/types/stock";
import { useMutation, useQuery } from "@tanstack/react-query";

interface WatchListResponse {
  watchList: StockProps[];
}

interface WatchListError {
  error: string;
}

interface AddToWatchListPayload {
  address: string;
  stockId: string;
}

const fetchWatchList = async (address: string): Promise<WatchListResponse> => {
  const response = await fetch(`/api/watchlist?address=${address}`);
  if (!response.ok) {
    throw new Error("Failed to fetch watchList");
  }
  return response.json();
};

const addToWatchList = async (
  payload: AddToWatchListPayload,
): Promise<{ message: string }> => {
  const response = await fetch("/api/watchlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData: WatchListError = await response.json();
    throw new Error(errorData.error || "Failed to update watchList");
  }

  return response.json();
};

export const useWatchList = (address: string) => {
  const {
    data,
    error,
    isLoading,
    isError,
    refetch: refetchWatchList,
  } = useQuery<WatchListResponse, Error>({
    queryKey: ["watchList", address],
    queryFn: () => fetchWatchList(address),
    enabled: !!address,
  });

  const mutation = useMutation({
    mutationFn: addToWatchList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["watchList", address] });
    },
  });

  const toggleWatchList = (stockId: string) => {
    if (!address) {
      //   toast.error("User address is required");
      return;
    }
    mutation.mutate({ address, stockId });
  };

  return {
    watchList: data?.watchList || [],
    isLoading,
    isError,
    error,
    refetchWatchList,
    toggleWatchList,
    isMutating: mutation.isPending,
  };
};
