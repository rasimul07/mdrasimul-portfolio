import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Md Rasimul Islam",
  description: "Develop and desined by Md Rasimul Islam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`m-0`}
      >
        <Toaster/>
        {children}
      </body>
    </html>
  );
}
