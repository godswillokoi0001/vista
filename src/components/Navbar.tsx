import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Logo } from "./Logo";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "FAQs", href: "/#faqs" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

type NavbarVariant = "home" | "light";

export const Navbar = ({
  variant = "home",
}: {
  variant?: NavbarVariant;
}): JSX.Element => {
  const isLight = variant === "light";
  const shouldReduceMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 4);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const headerClass = isLight
    ? isScrolled
      ? "bg-[rgba(252,252,252,0.8)] shadow-[0_8px_24px_rgba(16,17,18,0.08)] backdrop-blur-[10px]"
      : "bg-neutralswhte"
    : isScrolled
      ? "bg-[rgba(42,96,221,0.8)] shadow-[0_8px_24px_rgba(16,17,18,0.16)] backdrop-blur-[10px]"
      : "bg-primary-blueblue-500-main";

  const linkClass = isLight
    ? "text-primary-blueblue-900 hover:opacity-70 focus-visible:ring-primary-blueblue-900 focus-visible:ring-offset-neutralswhte"
    : "text-neutralswhte hover:opacity-80 focus-visible:ring-neutralswhte focus-visible:ring-offset-primary-blueblue-500-main";

  const menuIconColor = isLight ? "#132B63" : "#FCFCFC";

  return (
    <motion.header
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`fixed z-50 transition-all duration-300 ${
        isMenuOpen
          ? "inset-0 h-[100dvh] overflow-y-auto bg-primary-blueblue-500-main p-0 lg:inset-x-0 lg:top-0 lg:h-auto lg:overflow-visible lg:bg-transparent lg:pt-8 lg:pb-4"
          : `inset-x-0 top-0 pt-2.5 pb-3 lg:pt-8 lg:pb-4 ${headerClass}`
      }`}
    >
      {isMenuOpen ? (
        <div className="lg:hidden">
          <div className="flex h-[70px] items-center justify-between border-b border-white/15 px-5">
            <Link
              to="/"
              aria-label="Vista home"
              onClick={() => setIsMenuOpen(false)}
              className="text-neutralswhte"
            >
              <Logo className="h-7 w-[94.66px]" />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              aria-expanded="true"
              onClick={() => setIsMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-md text-neutralswhte transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex w-full flex-col items-center pt-[42px]"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex h-[56px] items-center justify-center px-4 font-['Montserrat',Helvetica] text-base font-medium leading-6 tracking-[-0.32px] text-neutralswhte transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-[48px] h-[52px] w-[calc(100%-36px)] rounded-lg bg-greygrey-900 px-5 py-2 font-['Montserrat',Helvetica] text-sm font-semibold leading-[16.8px] tracking-[-0.28px] text-neutralswhte hover:bg-greygrey-900/90"
            >
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Get started — It&apos;s Free!
              </Link>
            </Button>
          </nav>
        </div>
      ) : (
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-8 px-5 lg:px-[120px]"
        >
          <Link
            to="/"
            aria-label="Vista home"
            className={`shrink-0 transition-opacity hover:opacity-90 ${
              isLight ? "text-primary-blueblue-500-main" : "text-neutralswhte"
            }`}
          >
            <Logo className="h-7 w-[94.66px] lg:h-10 lg:w-[135.22px]" />
          </Link>
          <ul className="hidden w-[523px] items-center justify-between gap-2.5 lg:flex">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={`whitespace-nowrap font-['Montserrat',Helvetica] text-base font-semibold leading-[25.6px] tracking-[-0.32px] transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${linkClass}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex shrink-0 items-center gap-4">
            <Button
              asChild
              className="hidden h-[52px] shrink-0 rounded-lg bg-greygrey-900 px-5 py-2 font-['Montserrat',Helvetica] text-sm font-semibold leading-[16.8px] tracking-[-0.28px] text-neutralswhte hover:bg-greygrey-900/90 lg:inline-flex"
            >
              <Link to="/contact">Get started — It&apos;s Free!</Link>
            </Button>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={false}
              onClick={() => setIsMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-md transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 lg:hidden"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 7H20"
                  stroke={menuIconColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 12H20"
                  stroke={menuIconColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 17H20"
                  stroke={menuIconColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </nav>
      )}
    </motion.header>
  );
};
