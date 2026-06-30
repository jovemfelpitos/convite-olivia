import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display"
});

const body = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Olivia's Birthday",
  description: "Uma noite mágica para celebrar os 19 anos da Olivia.",
  openGraph: {
    title: "Olivia's Birthday",
    description: "Uma noite mágica para celebrar os 19 anos da Olivia.",
    images: ["/images/enchanted-bayou.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
