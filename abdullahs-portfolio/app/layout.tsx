import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";                   


import Header from "../components/Header";
import Footer from "../components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio", // Add title here
  description: "My new portfolio website", // Add  description here
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* The font class is applied to the <body> */}
      <body className={inter.className}>
        <Header />

        <main>
          {children}
        </main>
        
        <Footer />

      </body>
    </html>
  );
}