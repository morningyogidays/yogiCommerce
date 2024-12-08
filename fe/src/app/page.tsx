"use client"; 

import Head from "next/head";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation"; 

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
      if (pathname === "/" && !pathname.includes("/home")) {
          router.push("/home");
      }
  }, [pathname, router]);

  return (
    <>
      <Head>
        <link href="@/assets/icons/logo.svg" rel="icon" type="image/x-icon" />
        <title>OnlineShop</title>
      </Head>
      <section></section>
    </>
  );
}
