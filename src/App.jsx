import { Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="container">
        <AnimatePresence mode="wait">
          <Suspense
            fallback={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="card"
                style={{ padding: 24, textAlign: "center" }}
              >
                Loading...
              </motion.div>
            }
          >
            <AppRoutes />
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
