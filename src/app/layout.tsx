import type { Metadata } from "next";
import { Rubik as Font } from "next/font/google";
import "./globals.css";

const font = Font({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Comments",
  description: "A frontend mentor project built using NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
