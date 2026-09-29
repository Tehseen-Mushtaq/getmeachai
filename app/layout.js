import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "get me a chai - fund your projects",
  description: "This is a crowd funding platform to support creators",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SessionWrapper>
        <Navbar />
        <div className="min-h-screen ">
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(125%_125%_at_50%_100%,#000000_40%,#010133_100%)]"></div>
          {children}
        </div>
        <Footer />
      </SessionWrapper>
      </body>
    </html>
  );
}
