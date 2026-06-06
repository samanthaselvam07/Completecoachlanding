import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://completecoach.fit";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Complete Coach | Coach smarter. Scale faster.",
    template: "%s | Complete Coach",
  },
  description:
    "Complete Coach combines AI-powered check-in analysis, client management, and business systems into one coaching platform.",
  icons: {
    icon: "/brand/favicon.svg",
  },
  openGraph: {
    title: "Complete Coach",
    description:
      "AI-powered coaching software for client delivery, operations, and growth.",
    url: siteUrl,
    siteName: "Complete Coach",
    images: [
      {
        url: "/images/home-1.png",
        width: 1633,
        height: 826,
        alt: "Complete Coach landing page preview",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Coach",
    description:
      "AI-powered coaching software for client delivery, operations, and growth.",
    images: ["/images/home-1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
