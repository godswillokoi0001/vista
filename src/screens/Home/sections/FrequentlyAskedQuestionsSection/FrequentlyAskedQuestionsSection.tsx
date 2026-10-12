import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MotionItem, MotionSection } from "../../../../components/motion";

const frequentlyAskedQuestions = [
  {
    id: "account",
    question: "How do I open an account with Vista?",
    answer:
      "You can open an account in minutes through the Vista app or website. Download the app, create your profile, verify your identity, and choose a savings or wallet account that fits your needs. Once completed, your account is ready to use immediately.",
  },
  {
    id: "collateral",
    question: "Can I get a loan without collateral?",
    answer:
      "Yes. Qualified customers may be eligible for unsecured or low-collateral loan options depending on repayment history, income, and account activity. Our team reviews each application individually to find the right financial fit.",
  },
  {
    id: "loan-time",
    question: "How long does it take to receive a loan?",
    answer:
      "Most loan applications are reviewed within a few hours, and approved funds are usually disbursed the same day or within 24 hours, depending on verification and the type of loan requested.",
  },
  {
    id: "licensed-bank",
    question: "Is Vista a licensed bank?",
    answer:
      "Yes. Vista is a licensed microfinance bank committed to secure, compliant, and customer-focused financial services. We operate under regulatory standards designed to protect both customers and the wider financial system.",
  },
  {
    id: "save-money",
    question: "How do I save money with Vista?",
    answer:
      "You can save through dedicated savings products, wallet targets, or recurring plans tailored to your goals. Set a target, decide your contribution frequency, and track your growth from the app dashboard.",
  },
  {
    id: "withdrawal",
    question: "Can I withdraw to any bank account?",
    answer:
      "Yes, withdrawals can be processed to linked accounts based on your verification and security checks. This helps keep your money safe while making transfers quick, clear, and easy to track.",
  },
  {
    id: "bills",
    question: "What bills can I pay with Vista?",
    answer:
      "You can pay airtime, data, electricity, cable TV, internet, and other everyday essentials directly from the app. We continue to expand the payment options available to make daily transactions easier.",
  },
  {
    id: "support",
    question: "How do I contact customer support?",
    answer:
      "You can reach our support team through the app chat, email, or phone. We’re here to help with account questions, payments, loans, and general banking support whenever you need us.",
  },
];

export const FrequentlyAskedQuestionsSection = ({
  className = "mx-auto flex w-full max-w-[948px] flex-col items-center gap-[52px] px-5 py-16 sm:px-8 lg:gap-[108px] lg:px-0",
}: {
  className?: string;
}): JSX.Element => {
  const [openId, setOpenId] = useState<string | null>("account");
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionSection className={className}>
      <h2 className="w-full font-['Montserrat',Helvetica] text-center text-[28px] font-bold leading-[34px] tracking-[-1.12px] text-primary-blueblue-900 lg:text-5xl lg:leading-[1.2] lg:tracking-[-1.92px]">
        Frequently Asked Questions
      </h2>
      <div className="flex w-full flex-col gap-5">
        {frequentlyAskedQuestions.map((faq, index) => {
          const isOpen = openId === faq.id;
          return (
            <MotionItem
              key={faq.id}
              delay={index * 0.07}
              className="overflow-hidden rounded-2xl bg-[#F5F5F5] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(19,43,99,0.08)] lg:px-10 lg:py-8"
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="flex w-full items-start justify-between gap-4 text-left lg:items-center lg:gap-2.5"
              >
                <span className="flex-1 text-left font-['Montserrat',Helvetica] text-base font-semibold leading-[26px] tracking-[-0.64px] text-primary-blueblue-900 lg:text-center lg:text-2xl lg:leading-[1.2] lg:tracking-[-0.96px]">
                  {faq.question}
                </span>
                <motion.svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6 shrink-0"
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0.18, ease: "easeOut" }
                      : { duration: 0.28, ease: "easeOut" }
                  }
                >
                  <path
                    d="M6 12H18"
                    stroke="#132B63"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 18V6"
                    stroke="#132B63"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </button>
              <motion.div
                initial={false}
                animate={
                  isOpen
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0.2, ease: "easeOut" }
                    : { duration: 0.3, ease: "easeInOut" }
                }
                className="overflow-hidden"
              >
                <p className="pt-4 text-left font-['Montserrat',Helvetica] text-sm font-medium leading-[25px] tracking-[-0.28px] text-[#132b63b2] lg:text-center lg:text-lg lg:leading-[1.8] lg:tracking-[-0.36px]">
                  {faq.answer}
                </p>
              </motion.div>
            </MotionItem>
          );
        })}
      </div>
    </MotionSection>
  );
};
