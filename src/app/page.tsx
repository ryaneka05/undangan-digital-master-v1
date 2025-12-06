"use client";
import dynamicImport from "next/dynamic";
import theme from "@/config/theme";
import { Suspense } from "react";
import { InvitationContext } from "@/context/InvitationContext";
import { InvitationConfig } from "@/types/InvitationConfig";
import defaultConfig from "@/config/default-bak";

const ThemePage = dynamicImport(
  () => import(`./${theme.active}/page`),
  { ssr: false }
);

export default function UndanganClient({
  config,
}: {
  config?: InvitationConfig;
}) {
  const safeConfig = config ?? defaultConfig;
  return (
    <InvitationContext.Provider value={safeConfig}>
      <Suspense fallback={<div>Loading...</div>}>
        <ThemePage />
      </Suspense>
    </InvitationContext.Provider>
  );
}
