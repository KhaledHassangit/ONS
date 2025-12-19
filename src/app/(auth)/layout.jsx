import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css";
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import LoginHeader from "@/components/Login/LoginHeader/LoginHeader";
import StoreProvider from "@/components/StoreProvider/StoreProvider";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "  On Next Stay | Premium Hotel Booking & Accommodation Platform",
  description:
    "Experience luxury stays with On Next Stay. Our advanced booking platform offers real-time availability, competitive rates, and exclusive hotel deals worldwide. Trusted by travelers globally.",
  keywords:
    "luxury hotels, premium accommodation, hotel booking platform, travel deals, hotel reservation system, exclusive stays, worldwide hotels, real-time booking, On Next Stay, Camp Coding",
  authors: [{ name: "Camp Coding", url: "https://campcoding.com" }],
  creator: "Camp Coding",
  publisher: "Camp Coding",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://onnextstay.com"),
  openGraph: {
    title: "On Next Stay | Premium Hotel Booking & Accommodation Platform",
    description:
      "Experience luxury stays with On Next Stay. Our advanced booking platform offers real-time availability, competitive rates, and exclusive hotel deals worldwide. Trusted by travelers globally.",
    url: "https://onnextstay.com",
    siteName: "On Next Stay",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "On Next Stay - Luxury Accommodations Worldwide",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "On Next Stay | Premium Hotel Booking & Accommodation Platform",
    description:
      "Experience luxury stays with On Next Stay. Our advanced booking platform offers real-time availability, competitive rates, and exclusive hotel deals worldwide.",
    images: ["/twitter-image.jpg"],
    creator: "@campcoding",
    site: "@onnextstay",
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
  verification: {
    google: "",
    yandex: "your-yandex-verification",
    bing: "your-bing-verification",
    baidu: "your-baidu-verification",
  },
  alternates: {
    canonical: "https://onnextstay.com",
  },
  category: "travel",
  classification: "premium hotel booking platform",
  viewport: "width=device-width, initial-scale=1",

  themeColor: "#fff",

  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "On Next Stay",
  },
  applicationName: "On Next Stay",
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "On Next Stay",
    "application-name": "On Next Stay",
    "theme-color": "#000000",
    "format-detection": "telephone=no",
  },
};

export default function WebsiteLayout({ children, params }) {
  const pageName = params?.page || "home";

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="On Next Stay" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        data-page={pageName}
      >
        <StoreProvider>
          <LoginHeader />
          <main>{children}</main>
          <Footer />
        </StoreProvider>

        <ToastContainer />
      </body>
    </html>
  );
}
