import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "GitHub User Search App",
  description: "Search for GitHub Users",
  icons: {
    icon: '/assets/favicon-32x32.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
