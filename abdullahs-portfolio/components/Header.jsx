import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 shadow-md sticky top-0 bg-white z-10">
      <Link to="/" className="text-2xl font-bold text-blue-600">Abdullah</Link>
      <div className="space-x-4 flex items-center">
        <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
        <Link to="/work" className="text-gray-700 hover:text-blue-600">Work</Link>
        <Link to="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
        <Link to="/contact">
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
            Contact Me
          </button>
        </Link>
      </div>
    </header>
  );
}
