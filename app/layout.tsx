import "./globals.css";
import type { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fi">
      <body>{children}</body>
    </html>
  );
}