const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <a href="/" className="text-2xl font-bold text-teal-600">
          CareConnect
        </a>

        <div className="flex items-center gap-6">
          <a
            href="/login"
            className="text-gray-700 hover:text-teal-600 transition-colors"
          >
            Iniciar sesión
          </a>

          <a
            href="/register"
            className="px-5 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-colors"
          >
            Registrarse
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;