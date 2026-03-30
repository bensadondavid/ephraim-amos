import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const libre_baskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
});

const authenia = localFont({
  src: "./fonts/Authenia.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-authenia",
  display: "swap",
});

const le_jour_serif = localFont({
  src: "./fonts/le_jour_serif.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-le-jour-serif",
  display: "swap",
});

const shlomo_stam = localFont({
  src: "./fonts/ShlomoStam.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-shlomo-stam",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bar Mitsvah Ephraim Amos",
  description: "Bar Mitsvah Ephraim Amos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${libre_baskerville.variable} ${authenia.variable} ${le_jour_serif.variable} ${shlomo_stam.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative">
        <p className="absolute top-4 right-4 text-text font-bsd">בס"ד</p>
        {children}
      </body>
    </html>
  );
}
