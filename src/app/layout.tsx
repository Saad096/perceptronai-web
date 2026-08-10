/**
 * 2026-07 revamp: swapped display face to Space Grotesk (geometric,
 * contemporary) over Inter body, added the no-flash theme bootstrap so the
 * light/dark preference from localStorage applies before first paint.
 */
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/providers/LenisProvider";
import { MagneticCursor } from "@/components/ui/MagneticCursor";
import { buildMetadata, organizationJsonLd } from "@/lib/seo";
import { publicEnv } from "@/lib/env";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = buildMetadata();

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F6F3" },
    { media: "(prefers-color-scheme: dark)", color: "#0D0B14" },
  ],
  width: "device-width",
  initialScale: 1,
};

/** Applies the stored theme before hydration so there is no flash. */
const themeBootstrap = `(function(){try{var t=localStorage.getItem("qx-theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}document.documentElement.classList.toggle("dark",t==="dark");}catch(e){document.documentElement.classList.add("dark");}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const plausible = publicEnv.analytics.plausibleDomain;
  const gaId = publicEnv.analytics.gaId;
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} dark`} suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased" suppressHydrationWarning>
        <Script id="theme-bootstrap" strategy="beforeInteractive">
          {themeBootstrap}
        </Script>
        <Script
          id="ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        {plausible && (
          <Script
            defer
            data-domain={plausible}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        )}

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-[100] rounded-md bg-brand-600 px-3 py-2 text-sm font-medium text-white"
        >
          Skip to content
        </a>

        <LenisProvider>
          <MagneticCursor />
          <Header />
          <main id="main" className="relative">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
