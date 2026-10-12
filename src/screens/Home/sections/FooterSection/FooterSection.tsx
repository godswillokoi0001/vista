import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Logo } from "../../../../components/Logo";
import { MotionFooter, MotionSection } from "../../../../components/motion";
import { Button } from "../../../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

type IconProps = { className?: string };

const GooglePlayIcon = ({ className }: IconProps) => (
  <svg
    width="20"
    height="22"
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M14.2894 13.7822C16.7404 12.4123 18.6147 11.3686 18.7749 11.287C19.2875 11.0098 19.8161 10.2759 18.7749 9.70513C18.4385 9.52574 16.6282 8.51462 14.2894 7.20996L11.0695 10.5042L14.2894 13.7822Z"
      fill="white"
    />
    <path
      d="M11.0695 10.5039L0.784912 21.0554C1.02521 21.088 1.29754 21.0227 1.61793 20.8434C2.29075 20.4683 9.43548 16.489 14.2894 13.7819L11.0695 10.5039Z"
      fill="white"
    />
    <path
      d="M11.0695 10.5043L14.2894 7.21006C14.2894 7.21006 2.33884 0.572581 1.61796 0.181183C1.34563 0.0180997 1.04125 -0.0308252 0.768921 0.0180997L11.0695 10.5043Z"
      fill="white"
    />
    <path
      d="M11.0695 10.5048L0.768939 0.0185547C0.35243 0.116404 0 0.491496 0 1.25799C0 2.48111 0 18.7894 0 19.8168C0 20.5181 0.272333 21.0236 0.784959 21.0726L11.0695 10.5048Z"
      fill="white"
    />
  </svg>
);

const AppleIcon = ({ className }: IconProps) => (
  <svg
    width="16"
    height="20"
    viewBox="0 0 16 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M15.4545 6.60243C15.3407 6.68959 13.3327 7.8071 13.3327 10.292C13.3327 13.1661 15.8878 14.1829 15.9643 14.2081C15.9525 14.2701 15.5584 15.6006 14.6171 16.9564C13.7778 18.1494 12.9013 19.3405 11.5678 19.3405C10.2343 19.3405 9.89117 18.5755 8.3518 18.5755C6.85165 18.5755 6.31827 19.3657 5.09854 19.3657C3.87881 19.3657 3.02775 18.2618 2.04922 16.906C0.915776 15.314 0 12.8408 0 10.4934C0 6.72832 2.47868 4.73152 4.91813 4.73152C6.21434 4.73152 7.29483 5.57207 8.10864 5.57207C8.88323 5.57207 10.0912 4.68116 11.5658 4.68116C12.1247 4.68116 14.1328 4.73152 15.4545 6.60243ZM10.8658 3.0872C11.4756 2.37254 11.9071 1.38091 11.9071 0.38929C11.9071 0.25178 11.8953 0.112332 11.8698 0C10.8775 0.0367985 9.69703 0.65269 8.9852 1.46807C8.42632 2.09558 7.9047 3.0872 7.9047 4.09239C7.9047 4.24345 7.93019 4.39452 7.94196 4.44294C8.00471 4.45456 8.10668 4.46812 8.20865 4.46812C9.09893 4.46812 10.2187 3.87934 10.8658 3.0872Z"
      fill="white"
    />
  </svg>
);

const XIcon = ({ className }: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M6.66658 1.66699H0.833252L7.7173 10.8457L1.20821 18.3336H3.41657L8.74017 12.2095L13.3333 18.3337H19.1666L11.993 8.76891L18.1667 1.66699H15.9583L10.9702 7.40514L6.66658 1.66699ZM14.1666 16.667L4.16658 3.33366H5.83325L15.8333 16.667H14.1666Z"
      fill="#A0A1A3"
    />
  </svg>
);

const ThreadsIcon = ({ className }: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M10.1528 1.1748H10.1517C7.57502 1.19265 5.58355 2.06072 4.24466 3.76275C3.05476 5.2754 2.44552 7.38664 2.42505 10.0053V10.0065C2.44552 12.6253 3.0548 14.7243 4.24466 16.2369C5.58361 17.9389 7.58539 18.807 10.1621 18.8248H10.1631C12.4532 18.8089 14.0773 18.2083 15.4153 16.8716C17.1694 15.1192 17.1172 12.9203 16.5379 11.569C16.0968 10.5408 15.2257 9.71784 14.0583 9.20609C13.9075 6.71921 12.508 5.26782 10.2079 5.25313C8.84917 5.24475 7.62318 5.85282 6.87229 6.9922L8.2519 7.93859C8.696 7.26482 9.399 6.9398 10.1975 6.94718C11.3536 6.95456 12.1134 7.5924 12.3267 8.71142C11.6832 8.61075 10.9917 8.5815 10.2562 8.62367C8.05694 8.75034 6.6165 10.0505 6.71255 11.8533C6.81301 13.7382 8.63908 14.7652 10.3729 14.6705C12.4498 14.5567 13.684 13.024 13.9767 11.0693C14.4577 11.3809 14.8125 11.7783 15.0135 12.2471C15.3798 13.1015 15.4031 14.5107 14.2504 15.6623C13.2364 16.6753 12.0175 17.1169 10.1575 17.1307C8.09515 17.1153 6.5474 16.4547 5.54287 15.1777C4.59969 13.9787 4.10694 12.2398 4.08847 9.99984C4.10694 7.75976 4.59969 6.02091 5.54287 4.82195C6.5474 3.54495 8.09512 2.88431 10.1574 2.86886C12.2348 2.88442 13.8106 3.54831 14.8544 4.83248C15.4301 5.54079 15.7907 6.3875 16.0315 7.2614L17.6479 6.83014C17.3456 5.71565 16.8677 4.65276 16.1357 3.75221C14.7581 2.05732 12.7346 1.19272 10.1528 1.1748ZM10.3502 10.3148C11.0869 10.2723 11.7698 10.3192 12.3767 10.4451C12.2594 11.7593 11.7157 12.9002 10.2833 12.9788C9.35675 13.031 8.41917 12.6174 8.37358 11.7613C8.33967 11.1249 8.81041 10.4036 10.3502 10.3148Z"
      fill="#A0A1A3"
    />
  </svg>
);

const MetaIcon = ({ className }: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M14.0998 3.75C12.5575 3.75 11.3517 4.9117 10.2603 6.38742C8.76041 4.47769 7.5061 3.75 6.00502 3.75C2.94468 3.75 0.599854 7.73276 0.599854 11.9482C0.599854 14.5862 1.87605 16.25 4.01365 16.25C5.55216 16.25 6.65865 15.5247 8.62575 12.0862C8.62575 12.0862 9.44566 10.6382 10.0097 9.64075C10.2074 9.95983 10.4152 10.3032 10.6343 10.6724L11.5567 12.2242C13.3536 15.231 14.3547 16.25 16.1688 16.25C18.2512 16.25 19.4102 14.5634 19.4102 11.8707C19.4102 7.4569 17.0125 3.75 14.0998 3.75ZM7.12571 11.1552C5.53089 13.6552 4.97916 14.2155 4.09123 14.2155C3.17744 14.2155 2.63434 13.4132 2.63434 11.9827C2.63434 8.92242 4.1602 5.7931 5.97916 5.7931C6.96418 5.7931 7.78734 6.36198 9.04817 8.16702C7.85096 10.0034 7.12571 11.1552 7.12571 11.1552ZM13.1448 10.8404L12.0419 9.00108C11.7435 8.51567 11.4575 8.06967 11.1815 7.66072C12.1755 6.12652 12.9954 5.36207 13.9706 5.36207C15.9964 5.36207 17.6171 8.34483 17.6171 12.0086C17.6171 13.4052 17.1597 14.2155 16.2119 14.2155C15.3035 14.2155 14.8696 13.6156 13.1448 10.8404Z"
      fill="#A0A1A3"
    />
  </svg>
);

const LinkedInIcon = ({ className }: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M5.78381 4.16645C5.78351 4.84504 5.37181 5.45569 4.74286 5.71045C4.11391 5.96521 3.39331 5.81321 2.92083 5.32613C2.44836 4.83904 2.31837 4.11413 2.59216 3.49323C2.86596 2.87233 3.48886 2.47942 4.16715 2.49978C5.06804 2.52682 5.78422 3.26515 5.78381 4.16645ZM5.83381 7.06645H2.50048V17.4998H5.83381V7.06645ZM11.1005 7.06645H7.78381V17.4998H11.0672V12.0248C11.0672 8.97475 15.0422 8.69142 15.0422 12.0248V17.4998H18.3338V10.8914C18.3338 5.74978 12.4505 5.94145 11.0672 8.46642L11.1005 7.06645Z"
      fill="#A0A1A3"
    />
  </svg>
);

const YouTubeIcon = ({ className }: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M10.7139 3C11.1813 3.00257 12.3506 3.01388 13.593 3.06364L14.0335 3.08285C15.2844 3.14207 16.5342 3.24325 17.1541 3.41609C17.9809 3.64837 18.6308 4.32614 18.8505 5.18528C19.2002 6.54956 19.244 9.21232 19.2494 9.85671L19.2502 9.99024V9.99961C19.2502 9.99961 19.2502 10.0028 19.2502 10.0091L19.2494 10.1426C19.244 10.787 19.2002 13.4497 18.8505 14.814C18.6278 15.6763 17.9779 16.3541 17.1541 16.5832C16.5342 16.756 15.2844 16.8572 14.0335 16.9164L13.593 16.9356C12.3506 16.9854 11.1813 16.9967 10.7139 16.9993L10.5088 17H10.4997C10.4997 17 10.4966 17 10.4906 17L10.2857 16.9993C9.29651 16.9939 5.1607 16.9492 3.84531 16.5832C3.01847 16.3509 2.36859 15.6732 2.14891 14.814C1.79918 13.4497 1.75546 10.787 1.75 10.1426V9.85671C1.75546 9.21232 1.79918 6.54956 2.14891 5.18528C2.37163 4.32295 3.02152 3.64519 3.84531 3.41609C5.1607 3.05008 9.29651 3.00544 10.2857 3H10.7139ZM8.74962 6.93697V13.0623L13.9999 9.99961L8.74962 6.93697Z"
      fill="#A0A1A3"
    />
  </svg>
);

const InstagramIcon = ({ className }: IconProps) => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M8.33333 0C10.5975 0 10.88 0.00833328 11.7683 0.05C12.6558 0.0916666 13.26 0.230833 13.7917 0.4375C14.3417 0.649167 14.805 0.935833 15.2683 1.39833C15.6921 1.81491 16.02 2.31882 16.2292 2.875C16.435 3.40583 16.575 4.01083 16.6167 4.89833C16.6558 5.78667 16.6667 6.06917 16.6667 8.33333C16.6667 10.5975 16.6583 10.88 16.6167 11.7683C16.575 12.6558 16.435 13.26 16.2292 13.7917C16.0206 14.3481 15.6926 14.8522 15.2683 15.2683C14.8516 15.6919 14.3478 16.0198 13.7917 16.2292C13.2608 16.435 12.6558 16.575 11.7683 16.6167C10.88 16.6558 10.5975 16.6667 8.33333 16.6667C6.06917 16.6667 5.78667 16.6583 4.89833 16.6167C4.01083 16.575 3.40667 16.435 2.875 16.2292C2.31861 16.0204 1.81461 15.6925 1.39833 15.2683C0.974505 14.8518 0.646609 14.3479 0.4375 13.7917C0.230833 13.2608 0.0916666 12.6558 0.05 11.7683C0.0108333 10.88 0 10.5975 0 8.33333C0 6.06917 0.00833329 5.78667 0.05 4.89833C0.0916666 4.01 0.230833 3.40667 0.4375 2.875C0.64603 2.31848 0.974003 1.81443 1.39833 1.39833C1.81473 0.974359 2.31869 0.646441 2.875 0.4375C3.40667 0.230833 4.01 0.0916666 4.89833 0.05C5.78667 0.0108333 6.06917 0 8.33333 0ZM8.33333 4.16667C7.22826 4.16667 6.16846 4.60565 5.38706 5.38705C4.60565 6.16846 4.16667 7.22826 4.16667 8.33333C4.16667 9.4384 4.60565 10.4982 5.38706 11.2796C6.16846 12.061 7.22826 12.5 8.33333 12.5C9.4384 12.5 10.4982 12.061 11.2796 11.2796C12.061 10.4982 12.5 9.4384 12.5 8.33333C12.5 7.22826 12.061 6.16846 11.2796 5.38705C10.4982 4.60565 9.4384 4.16667 8.33333 4.16667V4.16667ZM13.75 3.95833C13.75 3.68207 13.6403 3.41711 13.4449 3.22176C13.2496 3.02641 12.9846 2.91667 12.7083 2.91667C12.4321 2.91667 12.1671 3.02641 11.9718 3.22176C11.7764 3.41711 11.6667 3.68207 11.6667 3.95833C11.6667 4.2346 11.7764 4.49955 11.9718 4.6949C12.1671 4.89025 12.4321 5 12.7083 5C12.9846 5 13.2496 4.89025 13.4449 4.6949C13.6403 4.49955 13.75 4.2346 13.75 3.95833ZM8.33333 5.83333C8.99637 5.83333 9.63226 6.09672 10.1011 6.56557C10.5699 7.03441 10.8333 7.67029 10.8333 8.33333C10.8333 8.99637 10.5699 9.63226 10.1011 10.1011C9.63226 10.5699 8.99637 10.8333 8.33333 10.8333C7.67029 10.8333 7.03441 10.5699 6.56557 10.1011C6.09673 9.63226 5.83333 8.99637 5.83333 8.33333C5.83333 7.67029 6.09673 7.03441 6.56557 6.56557C7.03441 6.09672 7.67029 5.83333 8.33333 5.83333V5.83333Z"
      fill="#A0A1A3"
    />
  </svg>
);

const NigeriaFlagIcon = ({ className }: IconProps) => (
  <svg
    width="39"
    height="39"
    viewBox="0 0 39 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M-8 3.78599C-8 1.6163 -6.24112 -0.142578 -4.07143 -0.142578H10.3333V39.1431H-4.07143C-6.24112 39.1431 -8 37.3843 -8 35.2146V3.78599Z"
      fill="#319E1F"
    />
    <rect
      x="10.3333"
      y="-0.142578"
      width="18.3333"
      height="39.2857"
      fill="white"
    />
    <path
      d="M28.6667 -0.142578H43.0715C45.2412 -0.142578 47.0001 1.6163 47.0001 3.78599V35.2146C47.0001 37.3843 45.2412 39.1431 43.0715 39.1431H28.6667V-0.142578Z"
      fill="#319E1F"
    />
  </svg>
);

const CopyrightIcon = ({ className }: IconProps) => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M11.9064 6.18977C11.1775 4.97792 9.84958 4.16667 8.33333 4.16667C6.03332 4.16667 4.16667 6.03332 4.16667 8.33333C4.16667 10.6333 6.03332 12.5 8.33333 12.5C9.84958 12.5 11.1775 11.6887 11.9064 10.4769L10.4774 9.62017C10.0402 10.3472 9.24392 10.8333 8.33333 10.8333C6.95208 10.8333 5.83333 9.71458 5.83333 8.33333C5.83333 6.95208 6.95208 5.83333 8.33333 5.83333C9.24417 5.83333 10.0409 6.31988 10.4779 7.04733L11.9064 6.18977ZM16.6667 8.33333C16.6667 3.73332 12.9333 0 8.33333 0C3.73332 0 0 3.73332 0 8.33333C0 12.9333 3.73332 16.6667 8.33333 16.6667C12.9333 16.6667 16.6667 12.9333 16.6667 8.33333ZM1.66667 8.33333C1.66667 4.64997 4.64997 1.66667 8.33333 1.66667C12.0167 1.66667 15 4.64997 15 8.33333C15 12.0167 12.0167 15 8.33333 15C4.64997 15 1.66667 12.0167 1.66667 8.33333Z"
      fill="#FCFCFC"
      fillOpacity="0.8"
    />
  </svg>
);

const productLinks = ["Digital Banking", "Loan", "Savings", "Bills Payment"];

const companyLinks = [
  { label: "Contact  us", href: "/contact" },
  { label: "About  us", href: "/about" },
];

const developerLinks = [
  "Download on IOS",
  "Download on Andriod",
  "API Documentation",
];

const legalLinks = ["Terms of service", "Privacy Policy", "Cookie Policy"];

const socialLinks = [
  { alt: "X", icon: XIcon },
  { alt: "Threads", icon: ThreadsIcon },
  { alt: "Meta", icon: MetaIcon },
  { alt: "LinkedIn", icon: LinkedInIcon },
  { alt: "YouTube", icon: YouTubeIcon },
  { alt: "Instagram", icon: InstagramIcon },
];

const footerTextClass =
  "[font-family:'Montserrat',Helvetica] text-sm tracking-[-0.56px] leading-[22px] lg:text-lg lg:tracking-[-0.72px] lg:leading-[28.8px]";

const footerMutedTextClass =
  "[font-family:'Montserrat',Helvetica] text-xs font-medium text-[#fcfcfccc] tracking-[-0.48px] leading-[19px] lg:text-lg lg:tracking-[-0.72px] lg:leading-[28.8px]";

type LinkItem = string | { label: string; href: string };

const FooterLinkGroup = ({
  title,
  links,
  className = "",
}: {
  title: string;
  links: LinkItem[];
  className?: string;
}) => (
  <MotionSection className={`flex min-w-0 flex-col items-start gap-4 lg:gap-5 ${className}`}>
    <h2
      className={`${footerTextClass} font-semibold text-neutralswhte whitespace-nowrap`}
    >
      {title}
    </h2>
    <nav
      aria-label={`${title} links`}
      className="flex flex-col items-start gap-2 lg:gap-5"
    >
      {links.map((link) => {
        const isObj = typeof link === "object";
        const label = isObj ? link.label : link;
        const href = isObj ? link.href : "#";
        return (
          <Link
            key={label}
            to={href}
            className={`${footerMutedTextClass} whitespace-nowrap transition-colors hover:text-white`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  </MotionSection>
);

const StoreBadge = ({
  icon: Icon,
  storeName,
  iconClassName,
}: {
  icon: (props: IconProps) => JSX.Element;
  storeName: string;
  iconClassName: string;
}) => (
  <Button
    type="button"
    className="flex h-[52px] w-[153px] items-center justify-start gap-2 overflow-hidden rounded-lg bg-greygrey-600 px-4 py-2 text-left text-white hover:bg-greygrey-600/90"
  >
    <Icon className={`shrink-0 ${iconClassName}`} />
    <span className="flex min-w-0 flex-col items-start">
      <span className="[font-family:'Rubik',Helvetica] text-[7.7px] font-medium leading-[9.15px] whitespace-nowrap">
        Download on the
      </span>
      <span className="mt-[-2.55px] [font-family:'Rubik',Helvetica] text-[16.4px] font-medium leading-[19.37px] tracking-[-1.15px] whitespace-nowrap">
        {storeName}
      </span>
    </span>
  </Button>
);

export const FooterSection = (): JSX.Element => {
  return (
    <MotionFooter className="w-full bg-greygrey-900 px-5 pt-10 pb-20 sm:px-10 lg:px-20 lg:py-16 xl:px-[120px] xl:pb-[120px] xl:pt-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 lg:gap-20 xl:gap-[120px]">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:gap-[160px]">
          <div className="flex w-full flex-col items-start gap-4 lg:max-w-[339px] lg:gap-8">
            <div className="flex max-w-[221px] flex-col items-start gap-4 lg:max-w-none lg:gap-8">
              <Logo className="h-8 w-[108.18px] text-[#FCFCFC] lg:h-12 lg:w-[162.27px]" />
              <p className="[font-family:'Montserrat',Helvetica] text-xs font-medium leading-[22px] tracking-[-0.48px] text-[#fcfcfccc] lg:text-lg lg:leading-[32.4px] lg:tracking-[-0.72px]">
                Vista is a people-first microfinance bank built to make saving,
                borrowing, and managing money simple.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <StoreBadge
                icon={GooglePlayIcon}
                storeName="Play Store"
                iconClassName="!h-[21.07px] !w-[19.37px] lg:!h-[26px] lg:!w-[24px]"
              />
              <StoreBadge
                icon={AppleIcon}
                storeName="App Store"
                iconClassName="!h-[19.37px] !w-[15.96px] lg:!h-[24px] lg:!w-[20px]"
              />
            </div>
          </div>
          <div className="grid w-full max-w-[622px] grid-cols-3 gap-2.5 sm:gap-6">
            <FooterLinkGroup title="Products" links={productLinks} />
            <FooterLinkGroup title="Company" links={companyLinks} />
            <FooterLinkGroup title="Developer" links={developerLinks} />
          </div>
        </div>
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-end lg:gap-12">
          <address className="[font-family:'Montserrat',Helvetica] w-full text-xs font-medium not-italic leading-[22px] tracking-[-0.48px] text-[#fcfcfccc] lg:max-w-[254px] lg:text-lg lg:leading-[32.4px] lg:tracking-[-0.72px]">
            KM 1 Itam, ITU Local Government Area, Akwa Ibom State.
            <br />
            <br />
            <a
              href="mailto:info@vistamfb.com"
              className="underline transition-colors hover:text-white"
            >
              info@vistamfb.com
              <br />
            </a>
            <a
              href="tel:02459271449"
              className="underline transition-colors hover:text-white"
            >
              (+234) 810 055 7064
            </a>
          </address>
          <div className="flex w-full items-end justify-between gap-2.5 lg:contents">
            <MotionSection className="flex flex-col items-start gap-2 lg:gap-6">
              <h2
                className={`${footerTextClass} text-center font-semibold text-neutralswhte whitespace-nowrap lg:text-left`}
              >
                Connect with us
              </h2>
              <div className="flex flex-wrap items-center gap-2 lg:gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={`${social.alt}-${index}`}
                      type="button"
                      aria-label={social.alt}
                      className="flex !h-6 !w-6 shrink-0 items-center justify-center rounded-[56px] bg-greygrey-60 !p-0 hover:bg-greygrey-80 lg:!h-[52px] lg:!w-[52px]"
                    >
                      <Icon className="!h-3 !w-3 lg:!h-5 lg:!w-5" />
                    </Button>
                  );
                })}
              </div>
            </MotionSection>
            <Select defaultValue="nigeria">
              <SelectTrigger
                aria-label="Select country"
                className="h-auto w-auto gap-2.5 border-0 bg-transparent p-0 text-[#fcfcfccc] shadow-none focus:ring-0"
              >
                <span className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full lg:h-[39px] lg:w-[39px]">
                  <NigeriaFlagIcon className="h-6 w-6 shrink-0 lg:h-[39px] lg:w-[39px]" />
                </span>
                <SelectValue className={`${footerMutedTextClass} text-right`} />
                <ChevronDown
                  className="h-4 w-4 shrink-0 lg:hidden"
                  strokeWidth={1.5}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nigeria">Nigeria</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 lg:gap-10">
          <div
            className="h-0 w-full shrink-0 self-stretch border-t-[1.2px] border-solid border-[#A0A1A3]"
            role="separator"
          />
          <div className="flex w-full flex-col items-center justify-between gap-6 lg:flex-row lg:items-center lg:gap-4">
            <nav
              aria-label="Legal links"
              className="flex w-full flex-wrap items-start justify-between gap-7 lg:w-auto lg:justify-start"
            >
              {legalLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="[font-family:'Montserrat',Helvetica] text-center text-xs font-medium leading-[19px] tracking-[-0.48px] text-[#fcfcfccc] transition-colors hover:text-white lg:text-lg lg:leading-[28.8px] lg:tracking-[-0.72px]"
                >
                  {link}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-0.5 text-[#fcfcfccc] lg:ml-auto lg:justify-end">
              <CopyrightIcon className="h-5 w-5 shrink-0" />
              <p className="[font-family:'Montserrat',Helvetica] whitespace-nowrap text-right text-xs font-medium leading-[19px] tracking-[-0.48px] text-[#fcfcfccc] lg:text-lg lg:leading-[28.8px] lg:tracking-[-0.72px]">
                2025. VistaMFB technologies. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MotionFooter>
  );
};
