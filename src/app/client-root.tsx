// src/app/client-root.tsx
"use client";

import { DefaultSeo } from "next-seo";
import { defaultSEO } from "../config/seo";

export default function ClientRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      {children}
    </>
  );
}
