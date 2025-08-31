import Navbar from "@/components/navbar/navbar";
import { Providers } from "@/context/providers";

export default async function MarketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <main>
        <Navbar />
        {children}
      </main>
    </Providers>
  );
}
