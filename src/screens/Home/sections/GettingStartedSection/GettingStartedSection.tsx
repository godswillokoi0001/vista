import { Button } from "../../../../components/ui/button";
import { MotionListItem, MotionSection } from "../../../../components/motion";

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

const gettingStartedSteps = [
  {
    number: "1",
    title: "Create an Account",
    description:
      "Sign up in minutes with just your phone number. No paperwork, no stress,  just simple setup from the start.",
  },
  {
    number: "2",
    title: "Set Up Your Wallet",
    description:
      "Add your details, explore your dashboard, and get ready to save, spend, or borrow. All from one place.",
  },
  {
    number: "3",
    title: "Start Banking",
    description:
      "Make transfers, pay bills, apply for a loan, or start saving. Vista is ready when you are.",
  },
];

export const GettingStartedSection = (): JSX.Element => {
  return (
    <MotionSection className="relative isolate flex w-full items-center justify-center overflow-hidden bg-[#232528] px-5 py-[85px] lg:min-h-[896px] lg:py-16">
      <div className="relative z-10 flex w-full max-w-[1030px] flex-col-reverse items-center gap-[66px] lg:flex-row lg:items-center lg:gap-[145px]">
        <div className="flex w-full max-w-[547px] flex-col items-start gap-8 lg:gap-[52px]">
          <h2 className="[font-family:'Montserrat',Helvetica] text-xl font-bold leading-6 tracking-[-0.4px] text-[#fcfcfc] lg:text-5xl lg:leading-[1.2] lg:tracking-[-1.92px]">
            Getting started is easy
          </h2>
          <ol className="flex w-full flex-col items-start gap-6 lg:gap-10">
            {gettingStartedSteps.map((step, index) => (
              <MotionListItem
                key={step.number}
                delay={index * 0.1}
                className="flex w-full items-start gap-4 rounded-2xl transition-all duration-300 hover:bg-white/5 lg:p-2"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-neutralswhte [font-family:'Montserrat',Helvetica] text-base font-bold leading-[19px] tracking-[-0.64px] text-primary-blueblue-500-main lg:h-10 lg:w-10 lg:p-2.5 lg:text-2xl lg:leading-[28.8px] lg:tracking-[-0.96px]">
                  {step.number}
                </span>
                <div className="flex min-w-0 flex-1 flex-col items-start gap-1 lg:gap-2">
                  <h3 className="[font-family:'Montserrat',Helvetica] text-base font-semibold leading-[19px] tracking-[-0.32px] text-neutralswhte lg:text-2xl lg:leading-[28.8px] lg:tracking-[-0.48px]">
                    {step.title}
                  </h3>
                  <p className="[font-family:'Montserrat',Helvetica] text-sm font-medium leading-[25px] tracking-[-0.28px] text-[#fcfcfcb2] lg:text-lg lg:leading-[32.4px] lg:tracking-[-0.36px]">
                    {step.description}
                  </p>
                </div>
              </MotionListItem>
            ))}
          </ol>
          <Button
            type="button"
            className="h-[52px] w-[203px] justify-center gap-2 rounded-lg bg-secondary-orangeorange-400 px-4 py-2 [font-family:'Montserrat',Helvetica] text-sm font-semibold leading-[16.8px] text-primary-blueblue-900 transition-all duration-300 hover:-translate-y-1 hover:bg-secondary-orangeorange-300 hover:shadow-[0_18px_38px_rgba(255,198,94,0.45)] lg:h-[60px] lg:w-auto lg:text-base lg:leading-[19.2px]"
          >
            Get Started for free
            <ArrowRightIcon />
          </Button>
        </div>
        <div className="relative h-[480.91px] w-[238px] shrink-0 lg:h-[682.97px] lg:w-[338px]">
          <img
            className="absolute inset-0 h-full w-full object-contain"
            alt="Vista mobile banking app displayed on an iPhone"
            src={`${import.meta.env.BASE_URL}images/iPhone-13.png`}
          />
        </div>
      </div>
    </MotionSection>
  );
};
