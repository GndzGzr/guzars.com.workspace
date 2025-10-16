import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import "./fonts.css";


export const metadata: Metadata = {
  title: "Guzars.com",
  description: "Gunduz Guzar's (Ömer Faruk Horat) personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <head>

      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
