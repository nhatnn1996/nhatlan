"use client";

import dynamic from "next/dynamic";

const SSR = dynamic(() => import("./ssr"), {
  ssr: false,
});

export default function Home() {
  return <SSR />;
}
