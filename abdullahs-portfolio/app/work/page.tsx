import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <section className="p-12 bg-gray-50">
      <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
        <Briefcase className="text-blue-500" /> Work Experience
      </h2>
      <div className="space-y-6">
        {[1, 2].map((n) => (
          <motion.div
            key={n}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: n * 0.2 }}
            className="p-6 bg-white rounded-lg shadow"
          >
            <h4 className="text-xl font-bold">Role Title {n}</h4>
            <p className="text-sm text-gray-500">Company Name – Duration</p>
            <p className="text-gray-700 mt-2">Description of the work done, tools used, and skills gained.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
