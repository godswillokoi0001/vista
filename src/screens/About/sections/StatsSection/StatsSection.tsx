import { MotionSection } from "../../../../components/motion";

export const StatsSection = (): JSX.Element => {
  return (
    <MotionSection className="w-full pt-[120px] lg:mx-auto lg:max-w-[1200px] lg:px-0 lg:pt-[132px]">
      <div className="flex items-center justify-center bg-[#eaeffcb3] px-5 py-[30px] sm:px-[120px] lg:rounded-2xl lg:py-10">
        <p className="mx-auto max-w-[938px] text-center font-['Montserrat',Helvetica] text-[16px] font-semibold leading-[1.6] tracking-[-0.02em] text-[#232528] sm:text-[28px] lg:text-[#132B63]">
          With more than 32 years of experience, Vista has helped over 50,000
          businesses grow and earned the trust of more than 59,000 customers.
        </p>
      </div>
    </MotionSection>
  );
};
