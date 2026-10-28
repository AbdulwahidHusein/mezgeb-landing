import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Geist_Mono,
  Inter,
  Noto_Sans_Ethiopic,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoEthiopic = Noto_Sans_Ethiopic({
  variable: "--font-ethiopic",
  subsets: ["ethiopic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mezgeb AI — Document intelligence for Ethiopian workflows",
  description:
    "Mezgeb AI helps organizations turn paper archives and scanned documents into structured, searchable information — including documents written in Amharic, English, and both.",
  openGraph: {
    title: "Mezgeb AI — Document intelligence for Ethiopian workflows",
    description: "Your documents hold the information. We make it usable.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} ${geistMono.variable} ${notoEthiopic.variable} dark h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
