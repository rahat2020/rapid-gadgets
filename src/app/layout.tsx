import { Tenor_Sans } from "next/font/google";
import "./globals.css";
import GotoWhatspp from "@/components/common/GotoWhatspp";
import GoToTop from "@/components/common/GoToTop";
import { Suspense } from "react";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/common/Footer";
import GlobalProvider from "@/components/core/GlobalProvider";

const tenor = Tenor_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-tenor-sans",
});

export const metadata = {
  title: "Rapid | Gadgets & Accessories",
  description:
    "Rapid is a gadgets and accessories shop. Order your favorite gadgets now!",
  openGraph: {
    title: "Rapid | Gadgets & Accessories",
    description:
      "Rapid is a gadgets and accessories shop. Order your favorite gadgets now!",
    url: "https://rapidsmarterp.com/",
    siteName: "Rapid",
    images: [
      {
        url: "https://rapidsmarterp.com/wp-content/uploads/2024/11/rapid-logo-768x269.webp",
        width: 800,
        height: 600,
        alt: "Rapid Logo",
      },
    ],
    locale: "en-US",
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
      <body className={`${tenor.variable} antialiased`}>
        <NextTopLoader
          color="var(--brand-color)"
          crawlSpeed={5}
          showSpinner={false}
          speed={5}
        />
        <Suspense fallback={null}>
          <GlobalProvider>{children}</GlobalProvider>
          <GotoWhatspp />
          <GoToTop />
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
