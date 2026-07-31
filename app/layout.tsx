import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import ThemeProvider from "@/app/components/theme-provider/ThemeProvider";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

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
    <html lang="en" className={`${spaceMono.variable}`}>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
