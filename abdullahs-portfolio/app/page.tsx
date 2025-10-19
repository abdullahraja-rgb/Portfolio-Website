import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Abdullah | Home";
  }, []);

  return (
    <section className="p-12 text-center bg-gradient-to-br from-blue-100 to-blue-200">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-4xl font-extrabold text-blue-800 mb-2">
        Hello, I'm Abdullah
      </motion.h2>
      <p className="text-lg text-blue-700">Computer Science Student @ University of Leeds (2027)</p>
    </section>
  );
}
