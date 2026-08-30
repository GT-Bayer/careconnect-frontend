const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
        <p className="text-sm text-gray-500">
          © 2026 CareConnect. Todos los derechos reservados.
        </p>

        <div className="flex gap-5 text-sm">
          <a
            href="/"
            className="text-gray-600 transition-colors hover:text-teal-600"
          >
            Inicio
          </a>

          <a
            href="/login"
            className="text-gray-600 transition-colors hover:text-teal-600"
          >
            Iniciar sesión
          </a>

          <a
            href="/register"
            className="text-gray-600 transition-colors hover:text-teal-600"
          >
            Registrarse
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;