import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "MD Rasimul Islam | Full Stack Developer",
  description:
    "Full Stack & Mobile Developer portfolio of MD Rasimul Islam. Experienced in MERN Stack, Next.js, React Native, Ionic, WebRTC, real-time systems, and cloud deployments.",
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
