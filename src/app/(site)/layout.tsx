import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { TypeTweaks } from "@/components/motion/TypeTweaks";
import { getSiteSettings } from "@/lib/data";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSiteSettings();

  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Header settings={settings} />
      <main>{children}</main>
      <Footer settings={settings} />
      <TypeTweaks />
    </>
  );
}
