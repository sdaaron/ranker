import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ranker",
  description: "你的信息流规划助手",
};

export default function RootLayout({ children }) {
  return (
    <>
      <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>
            {children}
            <Analytics />
          </body>
        </html>
      </ClerkProvider>
      <SpeedInsights />
    </>
  );
}
