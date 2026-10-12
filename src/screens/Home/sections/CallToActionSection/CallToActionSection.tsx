import { Button } from "../../../../components/ui/button";
import { MotionSection } from "../../../../components/motion";

const ArrowRightIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 shrink-0"
    style={{ width: "24px", height: "24px" }}
    aria-hidden="true"
  >
    <path
      d="M14.4301 5.93018L20.5001 12.0002L14.4301 18.0702"
      stroke="#132B63"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.5 12H20.33"
      stroke="#132B63"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CallToActionSectionProps {
  heading?: string;
  description?: string;
  buttonLabel?: string;
}

export const CallToActionSection = ({
  heading = "Start where you are",
  description = "Whether you're saving for something big or just getting back on track, Vista is ready to help you move forward.",
  buttonLabel = "Open an account now",
}: CallToActionSectionProps): JSX.Element => {
  return (
    <MotionSection className="relative isolate flex min-h-[330px] w-full items-center justify-center overflow-hidden bg-primary-blueblue-500-main lg:min-h-[590px]">
      <svg
        aria-hidden="true"
        viewBox="0 0 1128 590"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-10"
      >
        <path
          d="M445.749 847.413L0 -185.779H357.553L563.828 730.166L770.103 -185.779H1127.66L681.907 847.413H445.749Z"
          fill="#132B63"
        />
      </svg>
      <div className="relative z-10 flex w-full max-w-[948px] flex-col items-center justify-center gap-8 px-5 py-16 text-center lg:gap-[35px] lg:px-6 lg:py-[186px]">
        <div className="flex w-full flex-col items-center gap-2 lg:gap-4">
          <h2 className="w-full [font-family:'Montserrat',Helvetica] text-[28px] font-bold leading-[34px] tracking-[-1.12px] text-[#fcfcfc] lg:text-5xl lg:leading-[57.6px] lg:tracking-[-1.92px]">
            {heading}
          </h2>
          <p className="w-full max-w-[746px] [font-family:'Montserrat',Helvetica] text-sm font-medium leading-[25px] tracking-[-0.28px] text-[#fcfcfccc] lg:text-lg lg:leading-[32.4px] lg:tracking-[-0.36px]">
            {description}
          </p>
        </div>
        <Button
          type="button"
          className="h-[52px] w-[219px] justify-center gap-2 rounded-lg bg-secondary-orangeorange-300 px-4 py-2 [font-family:'Montserrat',Helvetica] text-sm font-semibold leading-[16.8px] tracking-[-0.28px] text-primary-blueblue-900 hover:bg-secondary-orangeorange-200 lg:h-[60px] lg:w-auto lg:gap-2.5 lg:text-base lg:leading-[19.2px] lg:tracking-[-0.32px]"
        >
          <span>{buttonLabel}</span>
          <ArrowRightIcon />
        </Button>
      </div>
    </MotionSection>
  );
};
