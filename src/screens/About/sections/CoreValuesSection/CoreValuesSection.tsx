import { MotionItem, MotionSection } from "../../../../components/motion";

const coreValues = [
  {
    title: "Integrity",
    description:
      "We operate with honesty and transparency in every interaction. Trust is earned by doing what’s right, even when no one is watching.",
  },
  {
    title: "Empowerment",
    description:
      "We give people tools, access, and knowledge to take control of their finances and build a better future.",
  },
  {
    title: "Innovation",
    description:
      "We find smarter ways to solve financial challenges, using technology and creativity to simplify the banking experience.",
  },
  {
    title: "Customer-Centricity",
    description:
      "We design every service and interaction around the real needs of our users, putting people at the center of every decision.",
  },
  {
    title: "Community Focus",
    description:
      "We support the economic growth of communities by building inclusive financial solutions and backing those who build and serve others.",
  },
];

export const CoreValuesSection = (): JSX.Element => {
  return (
    <MotionSection className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-5 pt-[100px] sm:px-8 lg:gap-[58px] lg:px-0 lg:pt-[209px]">
      <h2 className="font-['Montserrat',Helvetica] text-[20px] font-bold leading-[1.2] tracking-[-0.04em] text-[#132B63] lg:text-5xl">
        Vista’s core values
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {coreValues.map((value, index) => (
          <MotionItem
            key={value.title}
            delay={index * 0.08}
            className={`flex flex-col items-start gap-5 rounded-2xl bg-[#e9e9ea66] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(19,43,99,0.08)] lg:gap-4 lg:p-6 ${
              index === coreValues.length - 1 ? "sm:col-span-2" : ""
            }`}
          >
            <h3 className="font-['Montserrat',Helvetica] text-[16px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#2A60DD] lg:text-2xl">
              {value.title}
            </h3>
            <p className="font-['Montserrat',Helvetica] text-[14px] font-medium leading-[1.8] tracking-[-0.02em] text-[#132b63b2] lg:text-lg lg:leading-[32.4px] lg:tracking-[-0.36px]">
              {value.description}
            </p>
          </MotionItem>
        ))}
      </div>
    </MotionSection>
  );
};
