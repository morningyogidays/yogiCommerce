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
      <body>
        <Header />
        <main className=" justify-center items-center max-w-[1000px] mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
