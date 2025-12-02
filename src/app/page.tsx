"use client"
import theme from "@/config/theme"

export const dynamic = "force-dynamic";
export default async function Home() {
  const ThemePage = (await import(`./${theme.active}/page`)).default;
  return <ThemePage/>
}
