import { motion } from "framer-motion";
import "../styles/result.css";

export default function PredictionResult({ data }) {
  if (!data) {
    return (
      <div className="card">
        <p className="small">Prediction will appear here.</p>
      </div>
    );
  }

  const { predictions, probabilities, is_regression } = data;

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25 }}
    >
      <h3>Result</h3>
      <p className="result-hero">
        <strong>Prediction:</strong>{" "}
        {Array.isArray(predictions)
          ? String(predictions[0])
          : String(predictions)}
      </p>

      {!is_regression && probabilities && probabilities.length > 0 && (
        <>
          <p className="small">Class probabilities:</p>
          <ul className="prob-list">
            {Object.entries(probabilities[0]).map(([cls, val]) => (
              <li key={cls}>
                {cls}: {Number(val).toFixed(3)}
              </li>
            ))}
          </ul>
        </>
      )}
    </motion.div>
  );
}
