"use client";
import { config } from "@/config/wagmi/config";
import { lightTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { cookieToInitialState, WagmiProvider } from "wagmi";
import { AuthProvider } from "./authContext";
import { ModalProvider } from "./modalContext";
import ViewLayoutProvider from "./viewLayoutProvider";

export const queryClient = new QueryClient();
export const Providers = ({
  children,
  cookies,
}: Readonly<{
  children: React.ReactNode;
  cookies: string | null;
}>) => {
  const initialState = cookieToInitialState(config, cookies);
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          showRecentTransactions={false}
          modalSize="compact"
          theme={lightTheme()}
        >
          <AuthProvider>
            <ViewLayoutProvider>
              <ModalProvider>{children}</ModalProvider>
            </ViewLayoutProvider>
          </AuthProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
