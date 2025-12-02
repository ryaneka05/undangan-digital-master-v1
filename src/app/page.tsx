"use client";

export const dynamic = "force-dynamic";
import dynamicImport from "next/dynamic";
import theme from "@/config/theme";
import { Suspense } from "react";

const ThemePage = dynamicImport(() => import(`./${theme.active}/page`), { ssr: false });

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemePage />
    </Suspense>
  );
}