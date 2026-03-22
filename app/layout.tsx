"use client"; // 1. We must add "use client" to use usePathname

import type { Metadata } from "next";
import { usePathname } from "next/navigation"; // 2. Import the hook
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Note: Metadata cannot be exported from a Client Component.
// If you need SEO metadata, it's better to use Option 1 (Route Groups)
// but for now, let's focus on hiding the layout.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // 3. Check if the current route starts with /studio
  const isStudio = pathname?.startsWith("/studio");

  return (
    <html lang="en">
      <body className="antialiased bg-[#fffefc] relative">
        <div className="fixed inset-0 bg-[radial-gradient(#fcf5e5_1px,transparent_1px)] [background-size:24px_24px] opacity-30 z-[-1]" />

        {/* 4. Only show Navbar if NOT in studio */}
        {!isStudio && <Navbar />}

        <main className="relative min-h-screen z-10">{children}</main>

        {/* 5. Only show Footer if NOT in studio */}
        {!isStudio && <Footer />}
      </body>
    </html>
  );
}
