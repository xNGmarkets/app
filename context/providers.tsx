"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalProvider } from "./modalContext";
import { AuthProvider } from "./authContext";
import ViewLayoutProvider from "./viewLayoutProvider";
import { MarketProvider } from "./marketContext";

const queryClient = new QueryClient();
export const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MarketProvider>
          <ViewLayoutProvider>
            <ModalProvider>{children}</ModalProvider>
          </ViewLayoutProvider>
        </MarketProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};
