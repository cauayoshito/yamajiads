"use client";
import { DefaultSeo } from "next-seo";

export default function SeoClient() {
  return (
    <DefaultSeo
      title="Marshall — Yamaji Studio"
      description="Site institucional premium."
      openGraph={{
        title: "Marshall — Yamaji Studio",
        description: "Site institucional premium.",
      }}
    />
  );
}
