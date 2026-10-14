import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";
import { Toaster } from "sonner";
import { JsonLd } from "@/components/seo/json-ld";
import { Analytics } from "@vercel/analytics/next";
import { siteUrl } from "@/lib/projects";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Md Rakib Mostofa | Full-Stack Engineer | React, Next.js & React Native",
    template: "%s | Md Rakib Mostofa",
  },
  description:
    "Md Rakib Mostofa is a Full-Stack Software Engineer based in Chemnitz, Germany, specializing in React, Next.js, React Native, TypeScript and scalable web and mobile applications.",
  keywords: [
    "Md Rakib Mostofa",
    "Frontend-Focused Full-Stack Engineer",
    "Product Engineer",
    "Software Engineer",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "NestJS",
    "TypeScript",
    "Germany",
    "Chemnitz",
    "Web Developer",
    "Mobile Developer",
  ],
  authors: [{ name: "Md Rakib Mostofa", url: siteUrl }],
  creator: "Md Rakib Mostofa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Md Rakib Mostofa Portfolio",
    title: "Md Rakib Mostofa | Full-Stack Engineer | React, Next.js & React Native",
    description:
      "Md Rakib Mostofa is a Full-Stack Software Engineer based in Chemnitz, Germany, specializing in React, Next.js, React Native, TypeScript and scalable web and mobile applications.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Md Rakib Mostofa - Frontend-Focused Full-Stack and Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Rakib Mostofa | Full-Stack Engineer | React, Next.js & React Native",
    description:
      "Md Rakib Mostofa is a Full-Stack Software Engineer based in Chemnitz, Germany, specializing in React, Next.js, React Native, TypeScript and scalable web and mobile applications.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#050816" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:shadow-lg"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ScrollProgress />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <BackToTop />
          <Toaster
            position="top-right"
            richColors
            closeButton
            theme="system"
          />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
