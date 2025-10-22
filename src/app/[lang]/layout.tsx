import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../globals.css";
import "../fonts.css";

export const metadata: Metadata = {
  title: "Guzars.com",
  description: "Gunduz Guzar's (Ömer Faruk Horat) personal website",
};

// This tells Next.js which language routes to generate
export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'tr' },
  ];
}

export default function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang}>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
