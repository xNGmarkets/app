"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalProvider } from "./modalContext";
import { AuthProvider } from "./authContext";
import ViewLayoutProvider from "./viewLayoutProvider";

const queryClient = new QueryClient();
export const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ViewLayoutProvider>
          <ModalProvider>{children}</ModalProvider>
        </ViewLayoutProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};
