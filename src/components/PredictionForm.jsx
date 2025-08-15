import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/form.css";

/**
 * Replace the keys below with your real dataset feature column names
 * (DO NOT include the target column).
 */
const FIELDS = [
  {
    key: "StudyHoursPerDay",
    label: "Study Hours per Day",
    type: "number",
    placeholder: "e.g., 3",
  },
  {
    key: "SleepHours",
    label: "Sleep Hours",
    type: "number",
    placeholder: "e.g., 7",
  },
  {
    key: "AttendanceRate",
    label: "Attendance (%)",
    type: "number",
    placeholder: "e.g., 92",
  },
  {
    key: "SocialMediaUse",
    label: "Social Media Use",
    type: "text",
    placeholder: "Low / Medium / High",
  },
  {
    key: "ExtraCourses",
    label: "Takes Extra Courses?",
    type: "text",
    placeholder: "Yes / No",
  },
];

export default function PredictionForm({ onPredict, disabled = false }) {
  const [vals, setVals] = useState(
    Object.fromEntries(FIELDS.map((f) => [f.key, ""]))
  );

  const onChange = (key, v) => setVals((prev) => ({ ...prev, [key]: v }));

  const submit = (e) => {
    e.preventDefault();
    const payload = {};
    for (const f of FIELDS) {
      const raw = vals[f.key];
      if (raw === "") {
        payload[f.key] = null;
        continue;
      }
      if (f.type === "number") {
        const num = Number(raw);
        payload[f.key] = Number.isFinite(num) ? num : raw;
      } else {
        payload[f.key] = raw;
      }
    }
    onPredict(payload);
  };

  return (
    <motion.form
      onSubmit={submit}
      className="form card"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      {FIELDS.map((f) => (
        <div key={f.key}>
          <label className="label" htmlFor={f.key}>
            {f.label}
          </label>
          <input
            id={f.key}
            className="input"
            type={f.type === "number" ? "number" : "text"}
            placeholder={f.placeholder}
            value={vals[f.key]}
            onChange={(e) => onChange(f.key, e.target.value)}
            disabled={disabled}
          />
        </div>
      ))}
      <button className="btn" disabled={disabled}>
        Predict
      </button>
      {disabled && <div className="small">API offline — check backend.</div>}
    </motion.form>
  );
}
