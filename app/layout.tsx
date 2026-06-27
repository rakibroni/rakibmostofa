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
  metadataBase: new URL("https://rakibmostofa.dev"),
  title: {
    default: "Md Rakib Mostofa | Full-Stack Software Engineer",
    template: "%s | Md Rakib Mostofa",
  },
  description:
    "Full-Stack Software Engineer specializing in React, React Native, Next.js, Node.js, and NestJS. Based in Chemnitz, Germany. Building scalable web and mobile applications with modern technologies.",
  keywords: [
    "Md Rakib Mostofa",
    "Full-Stack Developer",
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
  authors: [{ name: "Md Rakib Mostofa", url: "https://rakibmostofa.dev" }],
  creator: "Md Rakib Mostofa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rakibmostofa.dev",
    siteName: "Md Rakib Mostofa Portfolio",
    title: "Md Rakib Mostofa | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in React, React Native, Next.js, and Node.js. Building scalable applications with clean architecture.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Md Rakib Mostofa - Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Rakib Mostofa | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in React, React Native, Next.js, and Node.js.",
    images: ["/og-image.png"],
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
    canonical: "https://rakibmostofa.dev",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
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
