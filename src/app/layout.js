import { Inter } from "next/font/google";
import "./globals.css";
import FeedbackForm from "@/components/feebackForm";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8EVDXJH2SJ"
        />

        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config','G-8EVDXJH2SJ'});
          `}
        </Script>
      <link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css" rel="stylesheet" />
      <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
      </head>
      <body className={inter.className}>
        <FeedbackForm apiUrl={'https://formspree.io/f/xdkkjzor'} />
        {children}
        
        </body>
    </html>
  );
}
