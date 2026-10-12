import { MotionSection } from "../../../../components/motion";

export const ContactHeroSection = (): JSX.Element => {
  return (
    <MotionSection className="relative h-[313px] w-full overflow-hidden bg-[#FFF6E6] lg:h-[558px]">
      <svg
        aria-hidden="true"
        viewBox="0 -268 1440 1351"
        preserveAspectRatio="none"
        className="pointer-events-none absolute left-[calc(50%+0.5px)] top-[calc(50%-246.5px)] h-[557px] w-[608px] max-w-none -translate-x-1/2 opacity-100 lg:left-1/2 lg:top-[-268px] lg:h-[1351px] lg:w-[1474px]"
      >
        <path
          d="M565.654 1083L-17 -268H450.37L720 929.688L989.63 -268H1457L874.346 1083H565.654Z"
          fill="#FFA400"
          opacity="0.06"
        />
      </svg>
      <h1 className="absolute left-1/2 top-1/2 z-10 w-[calc(100%-40px)] max-w-[353px] -translate-x-1/2 -translate-y-1/2 text-center font-['Montserrat',Helvetica] text-[28px] font-bold leading-[1.2] tracking-[-0.04em] text-[#132B63] lg:max-w-[725px] lg:text-[64px]">
        We&apos;re here when you need us
      </h1>
    </MotionSection>
  );
};
