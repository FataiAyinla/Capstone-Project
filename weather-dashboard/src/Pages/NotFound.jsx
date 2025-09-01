import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center mt-6 text-white">
      <h1 className="text-3xl font-bold">404</h1>
      <p>Page not found</p>
      <Link to="/" className="underline text-blue-200">Go Home</Link>
    </div>
  );
}
