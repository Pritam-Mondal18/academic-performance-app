import { motion } from "framer-motion";

export default function BehaviourTips({ latestInput }) {
  // Simple heuristics demo — replace with your own logic or backend suggestions
  if (!latestInput) return null;

  const tips = [];
  const s = latestInput;

  if (Number(s.StudyHoursPerDay) < 2)
    tips.push("Increase study time to at least 2–3 hours/day.");
  if (Number(s.SleepHours) < 7)
    tips.push("Aim for 7–8 hours of sleep for better retention.");
  if (Number(s.AttendanceRate) < 85)
    tips.push("Improve class attendance to >85%.");
  if ((s.SocialMediaUse || "").toLowerCase() === "high")
    tips.push("Reduce social media usage during study blocks.");

  if (tips.length === 0)
    tips.push("Your habits look solid. Keep tracking and iterating!");

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3>Behaviour Tips</h3>
      <ul>
        {tips.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </motion.div>
  );
}
