import type { Metadata } from "next";
import { Libre_Baskerville, Frank_Ruhl_Libre, David_Libre } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Musique from "@/components/ui/Musique";

const libre_baskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
});

const frank_ruhl_libre = Frank_Ruhl_Libre({
  variable: "--font-franck-ruhl-libre",
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

const david_libre = David_Libre({
  variable: "--font-david-libre",
  subsets: ["latin", "hebrew"],
  weight:"400"
});

const authenia = localFont({
  src: "./fonts/Authenia.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-authenia",
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
  metadataBase: new URL("https://ephraim-amos-six.vercel.app"),
  openGraph: {
    title: "Bar Mitsvah Ephraim Amos",
    description: "Bar Mitsvah Ephraim Amos",
    images: [
      {
        url: "/logo-wts.png",
        width: 300,
        height: 300,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${libre_baskerville.variable} ${authenia.variable} ${frank_ruhl_libre.variable} ${david_libre.variable} ${shlomo_stam.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative">
        <p className="absolute top-4 right-4 text-text font-bsd">בס"ד</p>
        {children}
        <Musique />
      </body>
    </html>
  );
}
