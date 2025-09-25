import Footer from "@/components/footer/footer";
import LandingNavbar from "@/components/navbar/landingPage/landingNavbar";
import { defaultMetada } from "@/libs/metadata";
import AOSAnimation from "@/utils/aosInit";
import type { Metadata } from "next";
import { Gabarito, Work_Sans } from "next/font/google";

export const gabarito = Gabarito({
  subsets: ["latin"],
  variable: "--gabarito-font",
  display: "swap",
  style: ["normal"],
});

export const worksans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--worksans-font",
  display: "swap",
  style: ["normal"],
});

export const metadata: Metadata = defaultMetada;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gabarito.variable} ${worksans.variable} antialiased`}>
        <AOSAnimation>
          <LandingNavbar />
          {children}

          <Footer />
        </AOSAnimation>
      </body>
    </html>
  );
}
