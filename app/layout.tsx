import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Oakes — Powering the AI Revolution",
  description: "Legendary hedge fund design with deep AI focus. Backing founders reshaping global markets through transformative artificial intelligence solutions.",
  keywords: [
    "investment fund",
    "AI investments",
    "artificial intelligence",
    "venture capital",
    "hedge fund",
    "AI infrastructure",
    "enterprise AI",
  ],
  openGraph: {
    title: "Oakes — Powering the AI Revolution",
    description: "Strategic investments in artificial intelligence and AI integrations across major international industries.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oakes — Powering the AI Revolution",
    description: "Backing founders reshaping global markets through transformative AI solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
