import NavBar from "@/components/NavBar";
import "../assets/globals.css";
import { Montserrat } from "next/font/google"
import Head from "next/head";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen text-dark`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}