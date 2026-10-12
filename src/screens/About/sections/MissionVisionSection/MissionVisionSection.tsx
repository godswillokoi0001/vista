import { MotionItem, MotionSection } from "../../../../components/motion";

const missionVision = [
  {
    title: "Our Vision",
    description:
      "To be a leading microfinance institution recognized for innovation, financial inclusion, and positive social impact, transforming lives and economies in every community we serve.",
  },
  {
    title: "Our Mission",
    description:
      "To empower individuals and small businesses by providing accessible and sustainable financial services, fostering economic growth, and improving quality of life OF THE underserved communities.",
  },
];

export const MissionVisionSection = (): JSX.Element => {
  return (
    <MotionSection className="relative isolate mt-[80px] flex w-full items-center justify-center overflow-hidden bg-[#232528] px-5 py-[70px] sm:px-[120px] lg:mt-[146px] lg:min-h-[611px]">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[calc(50%-767.5px)] top-[calc(50%-432.5px)] z-0 h-[645.64px] w-[780px]"
      >
        <img
          src={`${import.meta.env.BASE_URL}images/%E2%80%9C.png`}
          alt=""
          className="h-full w-full opacity-[0.14]"
        />
      </span>
      <div className="relative z-10 grid w-full max-w-[1203px] gap-5 lg:grid-cols-2 lg:gap-10">
        {missionVision.map((item, index) => (
          <MotionItem
            key={item.title}
            delay={index * 0.12}
            className="flex w-full flex-col gap-5 lg:gap-4"
          >
            <h2 className="font-['Montserrat',Helvetica] text-[28px] font-bold leading-[1.2] tracking-[-0.04em] text-[#FFD891] lg:text-5xl">
              {item.title}
            </h2>
            <p className="font-['Montserrat',Helvetica] text-[14px] font-medium leading-[1.8] tracking-[-0.02em] text-[#fcfcfccc] lg:text-lg lg:leading-[32.4px] lg:tracking-[-0.36px]">
              {item.description}
            </p>
          </MotionItem>
        ))}
      </div>
    </MotionSection>
  );
};
