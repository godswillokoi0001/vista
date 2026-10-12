import { Navbar } from "../../components/Navbar";
import { CallToActionSection } from "../Home/sections/CallToActionSection/CallToActionSection";
import { FooterSection } from "../Home/sections/FooterSection/FooterSection";
import { AboutHeroSection } from "./sections/AboutHeroSection";
import { CoreValuesSection } from "./sections/CoreValuesSection";
import { LeadershipSection } from "./sections/LeadershipSection";
import { MissionVisionSection } from "./sections/MissionVisionSection";
import { OurStorySection } from "./sections/OurStorySection";
import { StatsSection } from "./sections/StatsSection";

export const About = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-neutralswhte">
      <Navbar variant="light" />
      <main>
        <AboutHeroSection />
        <OurStorySection />
        <StatsSection />
        <MissionVisionSection />
        <CoreValuesSection />
        <LeadershipSection />
        <section id="contact-us" className="w-full">
          <CallToActionSection
            heading="Your goals deserve the right support"
            description="We’ve helped countless people take their next step. We’re ready to help you take yours."
          />
        </section>
        <footer className="w-full">
          <FooterSection />
        </footer>
      </main>
    </div>
  );
};
