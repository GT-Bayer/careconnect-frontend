import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-teal-600">
          CareConnect
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/login"
            className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
          >
            Iniciar sesión
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-lg bg-teal-600 text-white text-sm font-medium hover:bg-teal-700 transition-colors shadow-sm"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;