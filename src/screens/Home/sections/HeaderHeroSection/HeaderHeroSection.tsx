import { Button } from "../../../../components/ui/button";
import { MotionSection } from "../../../../components/motion";

const imageAsset = (fileName: string) =>
  `${import.meta.env.BASE_URL}images/${fileName}`;

const ArrowRightIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
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

const certifications = [
  {
    text: "We are licenced by",
    image: imageAsset("central-bank-of-nigeria-cbn-seeklogo-1.png"),
    alt: "Central bank of Nigeria",
    className: "h-5 w-[15px]",
  },
  {
    text: "and Insured by",
    image: imageAsset("image-75.png"),
    alt: "Insurance provider",
    className: "h-5 w-[47.24px]",
  },
];

export const HeaderHeroSection = (): JSX.Element => {
  return (
    <MotionSection className="relative min-h-[574px] w-full overflow-hidden bg-primary-blueblue-500-main md:min-h-[432px] lg:min-h-[811px]">
      <div className="relative mx-auto min-h-[574px] w-full max-w-[1440px] md:min-h-[432px] lg:min-h-[811px]">
        <img
          src={imageAsset("Component 4.png")}
          alt=""
          aria-hidden="true"
          className="animate-hero-spin pointer-events-none absolute left-[calc(50%+50px)] top-[calc(50%-216.5px)] hidden h-[585.58px] w-[585.58px] lg:block"
        />
        <img
          src={imageAsset("Component 4.png")}
          alt=""
          aria-hidden="true"
          className="animate-hero-spin pointer-events-none absolute right-[5.5%] top-[28px] hidden h-[358px] w-[358px] md:block lg:hidden"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-[calc(5.5%+12px)] hidden h-[238px] w-[358px] bg-contain bg-bottom bg-no-repeat md:block lg:hidden"
          style={{
            backgroundImage: `url('${imageAsset("shutterstock-1074306347-1-cutout.png")}')`,
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-[-90.43px] left-[calc(50%_-_53px)] hidden h-[526.95px] w-[788px] bg-cover bg-center md:hidden lg:block"
          style={{
            backgroundImage: `url('${imageAsset("shutterstock-1074306347-1-cutout.png")}')`,
          }}
          aria-hidden="true"
        />
        <div className="absolute left-1/2 top-[165px] flex w-[353px] -translate-x-1/2 flex-col items-center gap-8 md:left-[7%] md:top-[72px] md:w-[340px] md:translate-x-0 md:items-start md:gap-6 lg:left-[8.3333%] lg:top-[218px] lg:w-[641px] lg:gap-[46px]">
          <div className="flex w-full flex-col items-center gap-2 lg:items-start lg:gap-4">
            <h1 className="w-full text-center font-['Montserrat',Helvetica] text-[44px] font-bold leading-[48px] tracking-[-1.76px] text-[#fcfcfc] md:text-left md:text-[38px] md:leading-[42px] md:tracking-[-1.52px] lg:w-[518px] lg:text-[64px] lg:leading-[70.4px] lg:tracking-[-2.56px]">
              Banking that revolves{" "}
              <span className="text-secondary-orangeorange-300">around you</span>
            </h1>
            <p className="w-full text-center font-['Montserrat',Helvetica] text-base font-medium leading-[26px] tracking-[-0.32px] text-[#fcfcfccc] md:text-left md:text-[13px] md:leading-[22px] md:tracking-[-0.26px] lg:w-[512px] lg:text-xl lg:leading-9 lg:tracking-[-0.4px]">
              Banking that fits into your everyday life. Vista gives you a
              seamless, stress-free experience built around your needs.
            </p>
          </div>
          <div
            className="flex w-full flex-col items-center gap-4 md:items-start"
            style={{ animationDelay: "120ms" }}
          >
            <Button
              type="button"
              className="h-[52px] w-[231px] justify-center gap-2 rounded-lg bg-secondary-orangeorange-300 px-4 py-2 font-['Montserrat',Helvetica] text-sm font-semibold leading-[16.8px] tracking-[-0.28px] text-primary-blueblue-900 transition-all duration-300 hover:-translate-y-1 hover:bg-secondary-orangeorange-200 hover:shadow-[0_18px_38px_rgba(255,198,94,0.5)] md:h-[36px] md:w-[116px] md:gap-1 md:px-2 md:text-[10px] md:leading-4 lg:h-[60px] lg:w-auto lg:gap-2 lg:px-5 lg:text-base lg:leading-[19.2px] lg:tracking-[-0.32px]"
            >
              <span>Download App</span>
              <ArrowRightIcon className="!h-5 !w-5 md:!h-3 md:!w-3 lg:!h-6 lg:!w-6" />
            </Button>
            <div className="flex items-center justify-center gap-2.5 md:gap-1.5">
              {certifications.map((certification) => (
                <div
                  key={certification.text}
                  className="flex items-center justify-center gap-1"
                >
                  <span className="whitespace-nowrap font-['Montserrat',Helvetica] text-xs font-medium leading-[21.6px] tracking-[-0.48px] text-[#fcfcfccc] md:text-[8px] md:leading-3 md:tracking-[-0.2px] lg:text-xs lg:leading-[21.6px] lg:tracking-[-0.48px]">
                    {certification.text}
                  </span>
                  <img
                    className={`${certification.className} object-contain`}
                    src={certification.image}
                    alt={certification.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};
