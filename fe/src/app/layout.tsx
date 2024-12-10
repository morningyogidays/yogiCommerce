"use client";

import { ReactNode } from "react";
import "@/styles/globals.css";
import Header from "./component/header";
import Footer from "./component/footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>OnlineShop</title>
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow justify-center items-center mx-5 lg:max-w-[1000px] lg:mx-auto mb-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
