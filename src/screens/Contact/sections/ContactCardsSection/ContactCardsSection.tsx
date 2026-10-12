import { ArrowRight } from "lucide-react";
import { MotionItem, MotionSection } from "../../../../components/motion";

type IconProps = { className?: string };

const LocationIcon = ({ className }: IconProps) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <g clipPath="url(#clip0_95_3807)">
      <path
        d="M34.3668 14.0834C32.6168 6.38335 25.9002 2.91669 20.0002 2.91669C20.0002 2.91669 20.0002 2.91669 19.9835 2.91669C14.1002 2.91669 7.36683 6.36669 5.61683 14.0667C3.66683 22.6667 8.93349 29.95 13.7002 34.5333C15.4668 36.2333 17.7335 37.0834 20.0002 37.0834C22.2668 37.0834 24.5335 36.2333 26.2835 34.5333C31.0502 29.95 36.3168 22.6834 34.3668 14.0834ZM20.0002 22.4334C17.1002 22.4334 14.7502 20.0834 14.7502 17.1834C14.7502 14.2834 17.1002 11.9334 20.0002 11.9334C22.9002 11.9334 25.2502 14.2834 25.2502 17.1834C25.2502 20.0834 22.9002 22.4334 20.0002 22.4334Z"
        fill="#2A60DD"
      />
    </g>
    <defs>
      <clipPath id="clip0_95_3807">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const MailIcon = ({ className }: IconProps) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M28.333 5.83331H11.6663C6.66634 5.83331 3.33301 8.33331 3.33301 14.1666V25.8333C3.33301 31.6666 6.66634 34.1666 11.6663 34.1666H28.333C33.333 34.1666 36.6663 31.6666 36.6663 25.8333V14.1666C36.6663 8.33331 33.333 5.83331 28.333 5.83331ZM29.1163 15.9833L23.8997 20.15C22.7997 21.0333 21.3997 21.4666 19.9997 21.4666C18.5997 21.4666 17.183 21.0333 16.0997 20.15L10.883 15.9833C10.3497 15.55 10.2663 14.75 10.683 14.2166C11.1163 13.6833 11.8997 13.5833 12.433 14.0166L17.6497 18.1833C18.9163 19.2 21.0663 19.2 22.333 18.1833L27.5497 14.0166C28.083 13.5833 28.883 13.6666 29.2997 14.2166C29.733 14.75 29.6497 15.55 29.1163 15.9833Z"
      fill="#2A60DD"
    />
  </svg>
);

const CallIcon = ({ className }: IconProps) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M33.2833 27.2167C33.2833 27.8167 33.15 28.4333 32.8667 29.0333C32.5833 29.6333 32.2167 30.2 31.7333 30.7333C30.9167 31.6333 30.0167 32.2833 29 32.7C28 33.1167 26.9167 33.3333 25.75 33.3333C24.05 33.3333 22.2333 32.9333 20.3167 32.1167C18.4 31.3 16.4833 30.2 14.5833 28.8167C12.6667 27.4167 10.85 25.8667 9.11667 24.15C7.4 22.4167 5.85 20.6 4.46667 18.7C3.1 16.8 2 14.9 1.2 13.0167C0.4 11.1167 0 9.3 0 7.56667C0 6.43333 0.2 5.35 0.6 4.35C1 3.33333 1.63333 2.4 2.51667 1.56667C3.58333 0.516667 4.75 0 5.98333 0C6.45 0 6.91667 0.1 7.33333 0.3C7.76667 0.5 8.15 0.8 8.45 1.23333L12.3167 6.68333C12.6167 7.1 12.8333 7.48333 12.9833 7.85C13.1333 8.2 13.2167 8.55 13.2167 8.86667C13.2167 9.26667 13.1 9.66667 12.8667 10.05C12.65 10.4333 12.3333 10.8333 11.9333 11.2333L10.6667 12.55C10.4833 12.7333 10.4 12.95 10.4 13.2167C10.4 13.35 10.4167 13.4667 10.45 13.6C10.5 13.7333 10.55 13.8333 10.5833 13.9333C10.8833 14.4833 11.4 15.2 12.1333 16.0667C12.8833 16.9333 13.6833 17.8167 14.55 18.7C15.45 19.5833 16.3167 20.4 17.2 21.15C18.0667 21.8833 18.7833 22.3833 19.35 22.6833C19.4333 22.7167 19.5333 22.7667 19.65 22.8167C19.7833 22.8667 19.9167 22.8833 20.0667 22.8833C20.35 22.8833 20.5667 22.7833 20.75 22.6L22.0167 21.35C22.4333 20.9333 22.8333 20.6167 23.2167 20.4167C23.6 20.1833 23.9833 20.0667 24.4 20.0667C24.7167 20.0667 25.05 20.1333 25.4167 20.2833C25.7833 20.4333 26.1667 20.65 26.5833 20.9333L32.1 24.85C32.5333 25.15 32.8333 25.5 33.0167 25.9167C33.1833 26.3333 33.2833 26.75 33.2833 27.2167Z"
      fill="#2A60DD"
    />
  </svg>
);

const contactMethods = [
  {
    icon: LocationIcon,
    title: "Find us on the map",
    description:
      "Prefer to speak in person? You're welcome to visit any of our locations. We'd love to meet you.",
    linkLabel: "Get directions",
    href: "https://maps.google.com/?q=Vista+Microfinance+Bank",
  },
  {
    icon: MailIcon,
    title: "Send us an email",
    description:
      "Have a question, feedback, or request? Send us a message anytime. We'll get back to you as soon as we can.",
    linkLabel: "Reach out via email",
    href: "mailto:info@vistamfb.com",
  },
  {
    icon: CallIcon,
    title: "Give us a call",
    description:
      "Need help right away? Our team is here to talk and ready to assist you with whatever you need.",
    linkLabel: "Call us now",
    href: "tel:+2348100557064",
  },
];

export const ContactCardsSection = (): JSX.Element => {
  return (
    <MotionSection className="relative z-10 mx-auto -mt-8 w-full max-w-[1200px] px-6 sm:px-8 lg:px-0">
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <MotionItem
              key={method.title}
              delay={index * 0.1}
              className="flex h-[350px] flex-col items-start gap-5 rounded-2xl bg-[#FCFCFC] p-6 shadow-[0px_0px_6.7px_rgba(41,45,50,0.09)]"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EAEFFC]">
                <Icon />
              </div>
              <div className="flex flex-1 flex-col items-start gap-4">
                <h3 className="font-['Montserrat',Helvetica] text-2xl font-semibold leading-[1.2] tracking-[-0.04em] text-[#132B63]">
                  {method.title}
                </h3>
                <p className="font-['Montserrat',Helvetica] text-lg font-medium leading-[32.4px] tracking-[-0.36px] text-[#132b63b2]">
                  {method.description}
                </p>
                <a
                  href={method.href}
                  className="mt-auto inline-flex items-center gap-2 font-['Montserrat',Helvetica] text-base font-semibold leading-[1.8] tracking-[-0.02em] text-[#2A60DD] transition-opacity hover:opacity-80"
                >
                  {method.linkLabel}
                  <ArrowRight className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>
            </MotionItem>
          );
        })}
      </div>
    </MotionSection>
  );
};
