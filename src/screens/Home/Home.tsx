import { Navbar } from "../../components/Navbar";
import { BankingBenefitsSection } from "./sections/BankingBenefitsSection";
import { BankingFeaturesSection } from "./sections/BankingFeaturesSection/BankingFeaturesSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { FrequentlyAskedQuestionsSection } from "./sections/FrequentlyAskedQuestionsSection/FrequentlyAskedQuestionsSection";
import { GettingStartedSection } from "./sections/GettingStartedSection/GettingStartedSection";
import { HeaderHeroSection } from "./sections/HeaderHeroSection/HeaderHeroSection";

export const Home = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-neutralswhte">
      <Navbar />
      <main>
        <section id="home" className="w-full">
          <HeaderHeroSection />
        </section>
        <section id="features" className="w-full">
          <BankingFeaturesSection />
        </section>
        <section id="about-us" className="w-full">
          <BankingBenefitsSection />
        </section>
        <section className="mt-[109px] w-full lg:mt-[209px]">
          <GettingStartedSection />
        </section>
        <section id="faqs" className="w-full">
          <FrequentlyAskedQuestionsSection />
        </section>
        <section id="contact-us" className="w-full">
          <CallToActionSection />
        </section>
        <footer className="w-full">
          <FooterSection />
        </footer>
      </main>
    </div>
  );
};
