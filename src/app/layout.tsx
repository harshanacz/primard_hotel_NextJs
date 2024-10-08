import type { Metadata } from "next";
import "./globals.css"; 
import ResponsiveNavbar from "@/components/Home/Navbar/ResponsiveNavbar";

export const metadata: Metadata = {
  title: "Primard Hotels - CA",
  description: "Next.js + TypeScript + Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body className="antialiased">
        
        <ResponsiveNavbar/>
        {children}
      </body>
    </html>
  );
}
