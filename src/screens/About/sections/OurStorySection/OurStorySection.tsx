import { MotionSection } from "../../../../components/motion";

const paragraphClass =
  "font-['Montserrat',Helvetica] text-[14px] font-medium leading-[1.8] tracking-[-0.02em] text-[#132b63b2] lg:text-lg lg:leading-[32.4px] lg:tracking-[-0.36px]";

export const OurStorySection = (): JSX.Element => {
  return (
    <MotionSection className="mx-auto w-full max-w-[1200px] px-5 pt-[60px] sm:px-8 lg:px-0 lg:pt-[120px]">
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:gap-[81px]">
        <div className="flex w-full flex-col items-start gap-5 lg:max-w-[577px]">
          <h2 className="font-['Montserrat',Helvetica] text-[28px] font-bold leading-[1.2] tracking-[-0.04em] text-[#132B63] lg:text-5xl">
            Who we are
          </h2>
          <p className={paragraphClass}>
            Vista Microfinance Bank is a dynamic and forward-thinking financial
            institution dedicated to fostering financial inclusion and driving
            positive social change. With over 32 years in Banking operations, the
            bank was established on the 27th of September, 1992 by the then First
            Lady of Akwa Ibom State Lady Mrs. IMO ISEMIN as Uforo Community Bank
            as the first Microfinance institution in Akwa Ibom state saddled with
            the responsibility of providing financial services to the women and
            low-income earners in the state. The Bank was later restructured in
            1999 and was renamed Nsehe Community Bank. With the development of
            the Microfinance Banking Policy by the Central Bank of Nigeria in
            2005, The Bank was the renamed and registered as Nsehe Microfinance
            Bank limited in December 2005. The name was maintained until October
            2023 when the bank was restructured and now renamed as VISTA
            MICROFINANCE BANK, With a clear vision to be a leading microfinance
            institution recognized for innovation, financial inclusion, and
            positive social impact, Vista Microfinance Bank is committed to
            transforming lives and economies in every community it serves.
          </p>
        </div>
        <div className="w-full lg:max-w-[577px]">
          <p className={paragraphClass}>
            At the core of our mission is the empowerment of underserved
            populations, particularly small business owners, women, and
            low-income individuals, by providing them with accessible and
            affordable financial services. Through innovative products tailored
            to meet the unique needs of our clients, we aim to unlock the
            potential of these communities, enabling them to thrive economically
            and socially. In pursuit of our vision, we continuously innovate and
            adapt, striving to lead the microfinance industry with integrity,
            transparency, and a deep commitment to social impact. Vista
            Microfinance Bank is not just a financial institution; it is a
            catalyst for change, driving economic empowerment and social
            progress in every community we touch.
          </p>
        </div>
      </div>
    </MotionSection>
  );
};
