import { Navbar } from "../../components/Navbar";
import { CallToActionSection } from "../Home/sections/CallToActionSection/CallToActionSection";
import { FooterSection } from "../Home/sections/FooterSection/FooterSection";
import { FrequentlyAskedQuestionsSection } from "../Home/sections/FrequentlyAskedQuestionsSection/FrequentlyAskedQuestionsSection";
import { ContactCardsSection } from "./sections/ContactCardsSection";
import { ContactHeroSection } from "./sections/ContactHeroSection";

export const Contact = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-neutralswhte">
      <Navbar variant="light" />
      <main>
        <ContactHeroSection />
        <ContactCardsSection />
        <FrequentlyAskedQuestionsSection className="mx-auto flex w-full max-w-[948px] flex-col items-center gap-[58px] px-5 pt-[203px] sm:px-8 lg:px-0" />
        <section className="w-full pt-[262px]">
          <CallToActionSection
            heading="Your goals deserve the right support"
            description="We’ve helped countless people take their next step. We’re ready to take yours."
          />
        </section>
        <footer className="w-full">
          <FooterSection />
        </footer>
      </main>
    </div>
  );
};
