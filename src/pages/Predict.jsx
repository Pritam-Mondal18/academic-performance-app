import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PredictionForm from "../components/PredictionForm";
import PredictionResult from "../components/PredictionResult";
import BehaviourTips from "../components/BehaviourTips";
import { getHealth, postPredict } from "../utils/api";

export default function Predict() {
  const [apiOnline, setApiOnline] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [lastInput, setLastInput] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const h = await getHealth();
        setApiOnline(true && h);
      } catch {
        setApiOnline(false);
      }
    })();
  }, []);

  const onPredict = async (features) => {
    setLoading(true);
    setResult(null);
    setLastInput(features);
    try {
      const data = await postPredict(features); // expects {predictions, probabilities, is_regression}
      setResult(data);
    } catch (e) {
      console.error(e);
      alert("Prediction failed. Check backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-2">
      <PredictionForm onPredict={onPredict} disabled={!apiOnline || loading} />
      <div className="grid" style={{ gap: 16 }}>
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3>Status</h3>
          <p className="small">API: {apiOnline ? "Online ✅" : "Offline ❌"}</p>
          {loading && <p className="small">Analyzing behaviour…</p>}
        </motion.div>

        <PredictionResult data={result} />
        <BehaviourTips latestInput={lastInput} />
      </div>
    </div>
  );
}
