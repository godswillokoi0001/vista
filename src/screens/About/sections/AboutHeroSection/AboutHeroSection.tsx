import { MotionSection } from "../../../../components/motion";

const heroImage = `${import.meta.env.BASE_URL}images/image 73.png`;

export const AboutHeroSection = (): JSX.Element => {
  return (
    <MotionSection className="relative flex min-h-[313px] w-full items-center justify-center overflow-hidden bg-[#2A60DD] lg:min-h-[620px] lg:pt-24">
      <div
        aria-hidden="true"
        className="absolute left-[calc(50%_-_302.505px)] top-[-19px] h-[351.91px] w-[645.17px] lg:hidden"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(42, 96, 221, 0.58), rgba(42, 96, 221, 0.58)), url('${heroImage}')`,
          backgroundBlendMode: "overlay, normal",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(13, 26, 55, 0.22) 0%, rgba(13, 26, 55, 0.42) 100%), url('${heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center 42%",
        }}
      />
      <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_52%)] lg:block" />
      <h1 className="absolute left-[calc(50%_-_176.5px)] top-[189px] z-10 w-[353px] text-center font-['Montserrat',Helvetica] text-[28px] font-bold leading-[1.2] tracking-[-0.04em] text-[#FCFCFC] lg:relative lg:left-auto lg:top-auto lg:w-full lg:max-w-[839px] lg:px-6 lg:text-[72px] lg:leading-[1.1]">
        Behind the View, Beyond the Vision
      </h1>
    </MotionSection>
  );
};
