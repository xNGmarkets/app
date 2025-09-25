import Navbar from "@/components/navbar/navbar";
import { Providers } from "@/context/providers";
import { headers } from "next/headers";

export default async function MarketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const cookies = headerStore.get("cookie");
  return (
    <Providers cookies={cookies}>
      <main>
        <Navbar />
        {children}
      </main>
    </Providers>
  );
}
