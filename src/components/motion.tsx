import type { HTMLMotionProps } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const revealTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
};

const reducedRevealTransition = {
  duration: 0.35,
  ease: "easeOut" as const,
};

type MotionSectionProps = Omit<
  HTMLMotionProps<"section">,
  "initial" | "whileInView" | "viewport" | "transition"
> & {
  children: ReactNode;
};

export const MotionSection = ({
  children,
  ...props
}: MotionSectionProps): JSX.Element => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 22 }}
      whileInView={
        shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, amount: "some" }}
      transition={
        shouldReduceMotion ? reducedRevealTransition : revealTransition
      }
      {...props}
    >
      {children}
    </motion.section>
  );
};

type MotionFooterProps = Omit<
  HTMLMotionProps<"footer">,
  "initial" | "whileInView" | "viewport" | "transition"
> & {
  children: ReactNode;
};

export const MotionFooter = ({
  children,
  ...props
}: MotionFooterProps): JSX.Element => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.footer
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 22 }}
      whileInView={
        shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, amount: "some" }}
      transition={
        shouldReduceMotion ? reducedRevealTransition : revealTransition
      }
      {...props}
    >
      {children}
    </motion.footer>
  );
};

type MotionItemProps = Omit<
  HTMLMotionProps<"div">,
  "initial" | "whileInView" | "viewport" | "transition"
> & {
  delay?: number;
  children: ReactNode;
};

export const MotionItem = ({
  children,
  delay = 0,
  ...props
}: MotionItemProps): JSX.Element => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: 18, scale: 0.99 }
      }
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 1, y: 0, scale: 1 }
      }
      whileHover={shouldReduceMotion ? { y: -2 } : { y: -4 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        ...(shouldReduceMotion ? reducedRevealTransition : revealTransition),
        delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

type MotionArticleProps = Omit<
  HTMLMotionProps<"article">,
  "initial" | "whileInView" | "viewport" | "transition"
> & {
  delay?: number;
  children: ReactNode;
};

export const MotionArticle = ({
  children,
  delay = 0,
  ...props
}: MotionArticleProps): JSX.Element => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
      whileInView={
        shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        ...(shouldReduceMotion ? reducedRevealTransition : revealTransition),
        delay,
      }}
      {...props}
    >
      {children}
    </motion.article>
  );
};

type MotionListItemProps = Omit<
  HTMLMotionProps<"li">,
  "initial" | "whileInView" | "viewport" | "transition"
> & {
  delay?: number;
  children: ReactNode;
};

export const MotionListItem = ({
  children,
  delay = 0,
  ...props
}: MotionListItemProps): JSX.Element => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.li
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -14 }}
      whileInView={
        shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }
      }
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        ...(shouldReduceMotion ? reducedRevealTransition : revealTransition),
        delay,
      }}
      {...props}
    >
      {children}
    </motion.li>
  );
};
