import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { About } from "./screens/About/About";
import { Contact } from "./screens/Contact/Contact";

const PageRoutes = (): JSX.Element => {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <ScrollToHash />
      <AnimatePresence mode="sync">
        <motion.div
          key={location.pathname}
          initial={
            shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }
          }
          animate={{ opacity: 1, y: 0 }}
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: -8 }
          }
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

const ScrollToHash = (): null => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
};

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  );
};
