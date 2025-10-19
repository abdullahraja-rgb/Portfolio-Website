import { Contact2 } from "lucide-react";


export default function Contact() {
  return (
    <section className="p-12 bg-gray-50">
      <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
        <Contact2 className="text-blue-500" /> Contact Me
      </h2>
      <form className="grid gap-4 max-w-xl">
        <input className="p-3 rounded border border-gray-300" placeholder="Your Name" required />
        <input type="email" className="p-3 rounded border border-gray-300" placeholder="Your Email" required />
        <textarea className="p-3 rounded border border-gray-300" placeholder="Your Message" required></textarea>
        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">Send Message</button>
      </form>
    </section>
  );
}
