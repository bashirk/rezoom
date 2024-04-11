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
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
