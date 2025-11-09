import { redirect } from "next/navigation"
import Theme01 from "./te01/page";
import theme from "@/config/theme";

export default async function Home() {
  const ThemePage = (await import(`./${theme.active}/page`)).default;
  return <ThemePage/>
}
