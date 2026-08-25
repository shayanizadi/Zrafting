import type { Metadata } from "next";
import "./globals.css";
import DesktopLock from "./DesktopLock";

export const metadata: Metadata = {
  title: "Zrafting",
  description: "Rafting Tours Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-[var(--font-body)]">
        <DesktopLock />
        {children}
      </body>
    </html>
  );
}
