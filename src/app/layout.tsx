import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientPreloader from "../components/../app/../app/components/client"; // Client component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FOSS Summit '25",
  description: "Join us at the FOSS Summit to explore, contribute to, and celebrate the power of open-source software!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientPreloader />
        {children}
      </body>
    </html>
  );
}
