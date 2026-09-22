import { Link } from "react-router-dom";

export default function Navbar({ variant }) {
    return (
        <nav
            className={`
                w-full
                border-b
                border-gray-200
                bg-white
                ${
                    variant === "register"
                        ? "sticky top-0 z-50"
                        : ""
                }
            `}
        >
            <div
                className="
                    mx-auto
                    flex
                    max-w-7xl
                    items-center
                    justify-between
                    px-6
                    py-4
                "
            >
                {/* Logo */}
                <Link
                    to="/"
                    className="
                        text-2xl
                        font-bold
                        text-teal-600
                    "
                >
                    CareConnect
                </Link>

                {/* Navbar del registro */}
                {variant === "register" ? (
                    <div className="flex items-center gap-3">
                        <span className="hidden text-sm text-gray-600 sm:block">
                            ¿Ya tenés una cuenta?
                        </span>

                        <Link
                            to="/login"
                            className="
                                text-sm
                                font-semibold
                                text-teal-700
                                transition-colors
                                hover:text-teal-800
                            "
                        >
                            Iniciar sesión
                        </Link>
                    </div>
                ) : (
                    /* Navbar normal - Landing */
                    <div className="flex items-center gap-6">
                        <Link
                            to="/login"
                            className="
                                text-sm
                                font-medium
                                text-gray-700
                                transition-colors
                                hover:text-teal-600
                            "
                        >
                            Iniciar sesión
                        </Link>

                        <Link
                            to="/register"
                            className="
                                rounded-lg
                                bg-teal-600
                                px-5
                                py-2
                                text-sm
                                font-medium
                                text-white
                                shadow-sm
                                transition-colors
                                hover:bg-teal-700
                            "
                        >
                            Registrarse
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}