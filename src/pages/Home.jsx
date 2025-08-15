import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="grid grid-cols-2">
      <motion.div
        className="card"
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35 }}
      >
        <h2>Predict Academic Performance</h2>
        <p className="small">
          Enter behaviour patterns (study hours, sleep, attendance, etc.) and
          get an instant prediction powered by ML.
        </p>
        <Link className="btn" to="/predict">
          Get Started
        </Link>
      </motion.div>

      <motion.div
        className="card"
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, delay: 0.05 }}
      >
        <h3>How it works</h3>
        <ol>
          <li>Enter behavioural inputs</li>
          <li>We send them to the API</li>
          <li>The ML model predicts performance</li>
          <li>We show results and personalized tips</li>
        </ol>
      </motion.div>
    </div>
  );
}
