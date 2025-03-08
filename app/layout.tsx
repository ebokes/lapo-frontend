import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Layout from "./dashboard/layout";

const satoshi = localFont({
  src: [
    // LIGHT (weight 300)
    {
      path: "../public/fonts/Satoshi-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-LightItalic.woff",
      weight: "300",
      style: "italic",
    },

    // REGULAR (weight 400)
    {
      path: "../public/fonts/Satoshi-Regular.woff",
      weight: "400",
      style: "normal",
    },

    // MEDIUM (weight 500)
    {
      path: "../public/fonts/Satoshi-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-MediumItalic.woff",
      weight: "500",
      style: "italic",
    },

    // BOLD (weight 700)
    {
      path: "../public/fonts/Satoshi-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-BoldItalic.woff",
      weight: "700",
      style: "italic",
    },

    // BLACK (weight 900)
    {
      path: "../public/fonts/Satoshi-Black.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-BlackItalic.woff",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "LAPO Microfinance Bank",
  description: "Improving lives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
