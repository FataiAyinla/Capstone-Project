import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 bg-white/20 backdrop-blur-md rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold text-white">Weather Dashboard</h1>
      <div className="space-x-6">
        <Link to="/" className="text-white hover:underline">Home</Link>
        <Link to="/about" className="text-white hover:underline">About</Link>
      </div>
    </nav>
  );
}
