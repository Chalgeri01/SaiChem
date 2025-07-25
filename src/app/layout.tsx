import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import Link from "next/link";
import { Raleway } from "next/font/google";
import WhatsAppWidget from "@/components/WhatsAppWidget"; // ✅ Step 1: Import it

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Shree Sai Chemicals",
  description: "Leading chemical distributor in India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.variable}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body
        suppressHydrationWarning
        className="antialiased bg-[hsl(0,0%,100%)] text-[hsl(0,0%,15%)]"
      >
        <header className="w-full shadow bg-white sticky top-0 z-50 border-b border-border">
          <div className="max-w-7xl mx-auto flex items-center justify-start h-20 px-4 md:px-6 gap-16">
            <Link href="/" className="flex items-center gap-2 md:gap-3 flex-shrink-0">
              <img
                src="/ssc-logo.png"
                alt="SSC Logo"
                className="h-[64px] w-auto object-contain"
              />
              <span className="font-semibold text-base md:text-lg text-gray-800 whitespace-nowrap hidden sm:inline">
                Shree Sai Chemicals
              </span>
            </Link>

            <nav className="flex flex-wrap items-center gap-8 lg:gap-12 font-bold text-[hsl(0,0%,30%)] text-sm md:text-base">
              {[
                { href: "/", label: "Home" },
                { href: "/about-us", label: "About Us" },
                { href: "/mission-vision", label: "Mission & Vision" },
                { href: "/basic-chemicals", label: "Products" },
                { href: "/lab-grade-chemicals", label: "Labgrade Chemicals" },
                { href: "/contact-us", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-[hsl(20,66%,44%)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1 min-h-[60vh]">
          <ClientBody>{children}</ClientBody>
        </main>

        <footer className="bg-[hsl(0,0%,15%)] text-white mt-8">
          <div className="max-w-7xl mx-auto py-8 px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img
                src="/ssc-logo.png"
                alt="SSC Logo"
                className="h-[80px] w-auto object-contain filter invert brightness-200"
              />
              <div className="mt-2 text-neutral-300 text-sm space-y-3">
                <div>
                  <div className="font-semibold text-white">Registered Office:</div>
                  Shop No. 25 B.N. Birajdar Shopping Complex<br />
                  Saat Rasta, Solapur 413003
                </div>
                <div>
                  <div className="font-semibold text-white">Warehouse Address:</div>
                  Gat No. 55/2, Plot No. 39, Behind Ganesh Petrol Pump, Pune-Solapur National highway, At Post Kondi,
                  Solapur- 413 255
                </div>
                <div>
                  <div className="font-semibold text-white">Phone:</div>
                  +91-9890101050<br />
                  0217 2315003
                </div>
              </div>
            </div>

            <div>
              <div className="font-semibold mb-2">Our Products</div>
              <div className="flex flex-col gap-1 text-sm">
                <Link href="/product-category/acids" className="hover:underline">Acids</Link>
                <Link href="/product-category/instruments" className="hover:underline">Instruments</Link>
                <Link href="/product-category/pipettes" className="hover:underline">Pipettes</Link>
                <Link href="/product-category/filtration-products" className="hover:underline">Filtration Products</Link>
                <Link href="/product-category/bottles" className="hover:underline">Bottles</Link>
                <Link href="/product-category/burettes" className="hover:underline">Burettes</Link>
              </div>
            </div>

            <div>
              <div className="font-semibold mb-2">Useful Links</div>
              <div className="flex flex-col gap-1 text-sm">
                <Link href="/about-us" className="hover:underline">About Us</Link>
                <Link href="/mission-vision" className="hover:underline">Mission & Vision</Link>
                <Link href="/lab-grade-chemicals" className="hover:underline">Lab Grade Chemicals</Link>
                <Link href="/contact-us" className="hover:underline">Contact Us</Link>
              </div>
            </div>
          </div>

          <div className="text-center border-t border-neutral-700 py-4 text-xs text-neutral-400">
            &copy; 2025 Shree Sai Chemicals | Developed by Prakash
          </div>
        </footer>

        {/* ✅ Step 2: Mount WhatsApp Chat Widget */}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
