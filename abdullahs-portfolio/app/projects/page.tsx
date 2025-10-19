import { Sparkles } from "lucide-react";

export default function Projects() {
  return (
    <section className="p-12">
      <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
        <Sparkles className="text-blue-500" /> Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {["Calorie Calculator App", "Premier League Predictor"].map((project, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded shadow-sm">
            <div className="p-6">
              <h4 className="text-lg font-semibold text-gray-800">{project}</h4>
              <p className="text-sm text-gray-600">
                Short description of the project, tech stack, and results.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
