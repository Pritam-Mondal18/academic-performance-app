import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Predict from "./pages/Predict";

const Page = ({ children }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.div>
  );
};

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Page>
            <Home />
          </Page>
        }
      />
      <Route
        path="/predict"
        element={
          <Page>
            <Predict />
          </Page>
        }
      />
      <Route
        path="/about"
        element={
          <Page>
            <About />
          </Page>
        }
      />
      <Route
        path="*"
        element={
          <Page>
            <div className="card">Not Found</div>
          </Page>
        }
      />
    </Routes>
  );
}
