import { LanguageProvider } from "@/components/language-provider";
import { SiteAtmosphere } from "@/components/site-atmosphere";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Platform } from "@/components/platform";
import { Language } from "@/components/language";
import { UseCases } from "@/components/use-cases";
import { Trust } from "@/components/trust";
import { Pilot } from "@/components/pilot";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="relative overflow-x-clip">
        <SiteAtmosphere />
        <div className="relative z-[1]">
          <Navigation />
          <main>
            <Hero />
            <Problem />
            <Platform />
            <Language />
            <UseCases />
            <Trust />
            <Pilot />
            <FAQ />
            <CTA />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}
