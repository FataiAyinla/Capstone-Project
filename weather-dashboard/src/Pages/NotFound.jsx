import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center text-white p-6">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="mb-4">Oops! Page not found.</p>
      <Link to="/" className="text-blue-200 underline">
        Go back home
      </Link>
    </div>
  );
}
