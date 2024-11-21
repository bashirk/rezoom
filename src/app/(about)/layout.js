// layout.js
import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
  "30+ Projects Completed",
  "5+ Years of Freelancing", 
  "99% Client Satisfaction",
  "Authored In-Depth Course on Educative",
  "Technical Writer for major orgs 📝",
  "Top contributor 🏆",
];

export default function AboutLayout({ children }) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <InsightRoll insights={insights} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
