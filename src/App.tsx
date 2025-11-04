import React, { } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectsForSale from "./pages/ProjectsForSale";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Terminal from "./components/Terminal";
import ChatBot from "./components/ChatBot";
import { ToastProvider } from "./components/Toast";

const getPageVariants = (path: string): Variants => {
  switch (path) {
    case "/about":
      return { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 50 } };
    case "/projects":
      return { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -50 } };
    case "/projectsale":
      return { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.9 } };
    case "/contact":
      return { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 30 } };
    default:
      return { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };
  }
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {[
          { path: "/", element: <> <Hero /> <Terminal/> </> },
          { path: "/about", element: <About /> },
          { path: "/projects", element: <Projects /> },
          { path: "/projectsale", element: <ProjectsForSale /> },
          { path: "/contact", element: <Contact /> },
        ].map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <motion.div
                variants={getPageVariants(path)}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="min-h-screen"
              >
                {element}
              </motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ToastProvider>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <BackToTop />
        <Footer />
        <ChatBot/>
      </div>
      </ToastProvider>
    </Router>
  );
};

export default App;
