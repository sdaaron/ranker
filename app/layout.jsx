import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
// import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
export const revalidate = 0;
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Euery",
  description: "你的信息流规划助手",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          {/* <Footer /> */}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}
