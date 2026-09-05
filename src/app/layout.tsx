import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Chandrarai — Online art studio",
    template: "%s · Chandrarai",
  },
  description:
    "Chandrarai is an online art studio showcasing original paintings and teaching watercolor, oil, and ink — self-paced and live. Gallery-first, calm, and warm.",
  metadataBase: new URL("https://chandrarai.art"),
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }, { url: "/favicon.ico" }],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Chandrarai — Online art studio",
    description:
      "Original paintings and patient painting courses. Browse the gallery or learn with me.",
    url: "https://chandrarai.art",
    siteName: "Chandrarai",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen font-sans">
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
