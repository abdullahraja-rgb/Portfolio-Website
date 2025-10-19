import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";

const skills = [
  { name: "Python", level: "1 year" },
  { name: "C", level: "1 year" },
  { name: "SQL", level: "1 year" },
  { name: "JavaScript", level: "6 months" },
  { name: "HDL", level: "1 year" },
  { name: "React.js", level: "6 months" },
  { name: "React Native", level: "1 month" },
  { name: "+ Others", level: "Always Exploring" },
];

export default function About() {
  return (
    <section className="p-12">
      <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
        <Code2 className="text-blue-500" /> About Me
      </h2>
      <p className="mb-6 text-gray-700">
        I'm a computer science student passionate about building practical tech solutions. I love exploring new frameworks, writing clean code, and experimenting with AI and front-end design.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
}
