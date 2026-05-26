import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Himon Mia | MERN Stack Developer",
  description: "Professional MERN Stack Developer Portfolio Website.",
  icons:{
    icon:"/logo.jpg"
  }
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en" suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <Providers>       
        {children}
        <CustomCursor />
        </Providers>
        </body>
    </html>
  );
}
