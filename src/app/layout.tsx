

import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata = {
  title: "Deepak.Designs",
  description:
    "Deepak.Designs - A portfolio by Deepak Dayanandan, UI/UX Designer and Front-End Developer creating modern, user-focused web experiences.",
  icons: {
    icon: "/logo001.png",
  },  
    openGraph: {
    title: "Deepak.Designs",
    description:
      "A portfolio by Deepak Dayanandan — UI/UX Designer & Front-End Developer crafting modern experiences.",
    url: "https://deepakdesigns.vercel.app",
    siteName: "Deepak.Designs",
    images: [
      {
        url: "/Slice5.png", // 🖼️ Replace this with your new image file
        width: 1200,
        height: 630,
        alt: "Deepak.Designs Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/*<link rel="icon" href="/logo.png" />
         <link
          rel="preload"
          href="/fonts/Humane-Thin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        /> */}
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
