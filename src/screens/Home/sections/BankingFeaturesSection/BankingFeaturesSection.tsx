import { Button } from "../../../../components/ui/button";
import { MotionArticle, MotionSection } from "../../../../components/motion";

const imageAsset = (fileName: string) =>
  `${import.meta.env.BASE_URL}images/${fileName}`;

type Feature = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  side: "left" | "right";
  visual: "account" | "banking" | "card" | "savings" | "loan";
};

const features: Feature[] = [
  {
    eyebrow: "INSTANT ACCOUNT",
    title: "Instant Account Opening",
    description:
      "Sign up in minutes with just your phone. No paperwork, no branch visits, just simple banking from the start.",
    image: imageAsset("Frame-48095765.png"),
    imageAlt: "Instant account opening interface",
    side: "right",
    visual: "account",
  },
  {
    eyebrow: "DIGITAL BANKING",
    title: "Seamless Internet Banking",
    description:
      "Everything you need to save, send, and manage your money, right from your phone, anytime.",
    image: imageAsset("Frame-48095766.png"),
    imageAlt: "Digital banking interface",
    side: "left",
    visual: "banking",
  },
  {
    eyebrow: "CARD PAYMENTS",
    title: "Pay with Your Vista Card",
    description:
      "Use your Vista card anywhere, anytime: online, in-store, or at the ATM. It's banking that travels with you.",
    image: imageAsset("Frame-48095767.png"),
    imageAlt: "Vista card payment interface",
    side: "right",
    visual: "card",
  },
  {
    eyebrow: "SMART SAVINGS",
    title: "Save the Way You Want",
    description:
      "Whether it's daily, weekly, or when you choose. Vista helps you build habits that grow your money.",
    image: imageAsset("Frame-48095768.png"),
    imageAlt: "Smart savings interface",
    side: "left",
    visual: "savings",
  },
  {
    eyebrow: "FAST LOANS",
    title: "Get Loans in Minutes",
    description:
      "No paperwork, no stress. Access flexible loans right from the app, whenever you need them.",
    image: imageAsset("Frame-48095770.png"),
    imageAlt: "Fast loan interface",
    side: "right",
    visual: "loan",
  },
];

const textClass =
  "[font-family:'Montserrat',Helvetica] text-primary-blueblue-900";

const FeatureCopy = ({ feature }: { feature: Feature }) => (
  <div className="flex w-full max-w-[518px] flex-col items-center gap-6 lg:items-start lg:gap-8">
    <div className="flex w-full flex-col items-center gap-2 lg:items-start lg:gap-4">
      <p className="text-center [font-family:'Montserrat',Helvetica] text-xs font-semibold leading-[22px] tracking-[-0.24px] text-primary-blueblue-500-main lg:text-left lg:text-lg lg:leading-[32.4px] lg:tracking-[-0.36px]">
        {feature.eyebrow}
      </p>
      <div className="flex w-full flex-col items-center gap-1 lg:items-start lg:gap-4">
        <h2 className="text-center [font-family:'Montserrat',Helvetica] text-base font-semibold leading-[19px] tracking-[-0.64px] text-primary-blueblue-900 lg:text-left lg:text-[40px] lg:leading-[48px] lg:tracking-[-1.6px]">
          {feature.title}
        </h2>
        <p className="text-center [font-family:'Montserrat',Helvetica] text-sm font-medium leading-[25px] tracking-[-0.28px] text-primary-blueblue-900 opacity-70 lg:text-left lg:text-lg lg:leading-[32.4px] lg:tracking-[-0.36px]">
          {feature.description}
        </p>
      </div>
    </div>
    <Button
      type="button"
      className="h-[52px] w-[171px] justify-center rounded-lg bg-primary-blueblue-500-main px-4 py-2 font-['Montserrat',Helvetica] text-sm font-semibold leading-[16.8px] text-neutralswhte transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blueblue-500-main/90 hover:shadow-[0_18px_38px_rgba(42,96,221,0.25)] lg:h-[60px] lg:w-auto lg:px-5 lg:text-base lg:leading-[19.2px]"
    >
      Get Started for free
    </Button>
  </div>
);

const FeatureVisual = ({ feature }: { feature: Feature }) => (
  <div className="relative h-[272.73px] w-full max-w-[250px] shrink-0 lg:h-[540px] lg:max-w-[495px]">
    <div className="absolute inset-0 rounded-[11.33px] bg-greygrey-60 opacity-40 lg:rounded-[30px]" />
    <img
      className={`absolute inset-0 h-full w-full rounded-[11.33px] object-cover lg:rounded-[30px] ${
        feature.visual === "account" || feature.visual === "banking"
          ? ""
          : "object-contain"
      }`}
      src={feature.image}
      alt={feature.imageAlt}
    />
  </div>
);

export const BankingFeaturesSection = (): JSX.Element => {
  return (
    <MotionSection className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-20 px-0 py-16 lg:gap-[83px]">
      <header className="flex w-full max-w-[975px] flex-col items-center gap-2 px-5 text-center lg:gap-5 lg:px-0">
        <h1 className={`${textClass} max-w-[935px] text-[28px] font-bold leading-9 tracking-[-1.12px] lg:text-[48px] lg:leading-[57.6px] lg:tracking-[-1.92px]`}>
          Everything you need.{" "}
          <span className="text-[#132b634d]">Nothing you don&apos;t.</span>
        </h1>
        <p className={`${textClass} max-w-[671px] text-sm font-medium leading-[25px] tracking-[-0.28px] opacity-70 lg:text-lg lg:leading-[32.4px] lg:tracking-[-0.36px]`}>
          Vista keeps things simple. Save, borrow, and pay with ease, all
          without the usual stress of banking.
        </p>
      </header>
      <div className="flex w-full flex-col gap-20 lg:gap-[60px]">
        {features.map((feature, index) => (
          <MotionArticle
            key={feature.eyebrow}
            delay={index * 0.12}
            className={`flex w-full flex-col-reverse items-center justify-center gap-10 px-5 py-4 lg:min-h-[660px] lg:flex-row lg:gap-[166px] lg:px-[120px] lg:py-5 ${
              feature.side === "left" ? "lg:flex-row-reverse" : ""
            }`}
          >
            <FeatureCopy feature={feature} />
            <FeatureVisual feature={feature} />
          </MotionArticle>
        ))}
      </div>
    </MotionSection>
  );
};
