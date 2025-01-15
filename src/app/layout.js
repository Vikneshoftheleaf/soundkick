import { Inter } from "next/font/google";
import "./globals.css";
import FeedbackForm from "@/components/feebackForm";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
