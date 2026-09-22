import { useState } from "react";

export default function PasswordInput({
    id,
    name,
    label,
    value,
    onChange,
    placeholder,
    error,
    showRequirements = false,
}) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <label
                htmlFor={id}
                className="mb-1.5 block text-sm font-medium text-gray-700"
            >
                {label}
            </label>

            <div className="relative">
                <input
                    id={id}
                    name={name}
                    type={showPassword ? "text" : "password"}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    autoComplete="new-password"
                    className={`
                        w-full
                        rounded-lg
                        border
                        bg-white
                        px-3 py-2.5
                        pr-11
                        text-sm text-gray-900
                        placeholder:text-gray-400
                        outline-none
                        transition
                        focus:ring-2
                        ${
                            error
                                ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                                : "border-gray-300 focus:border-teal-600 focus:ring-teal-100"
                        }
                    `}
                />

                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="
                        absolute
                        inset-y-0 right-0
                        flex items-center
                        px-3
                        text-gray-400
                        transition-colors
                        hover:text-teal-600
                    "
                    aria-label={
                        showPassword
                            ? "Ocultar contraseña"
                            : "Mostrar contraseña"
                    }
                >
                    {showPassword ? (
                        /* Ojo tachado */
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-5 w-5"
                        >
                            <path d="M3 3l18 18" />
                            <path d="M10.6 10.6a2 2 0 002.8 2.8" />
                            <path d="M9.9 4.2A10.7 10.7 0 0112 4c5.5 0 9 5 9 5a15.4 15.4 0 01-2.1 2.7" />
                            <path d="M6.6 6.6C4.4 8 3 10 3 10s3.5 5 9 5a9.8 9.8 0 004-.8" />
                        </svg>
                    ) : (
                        /* Ojo */
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-5 w-5"
                        >
                            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Requisitos de contraseña */}
            {showRequirements && error === "invalid" && (
                <div className="mt-2 text-sm text-red-600">
                    <p className="font-medium">
                        La contraseña debe contener:
                    </p>

                    <ul className="mt-1 space-y-1">
                        <li>• Al menos 8 caracteres</li>
                        <li>• Una letra mayúscula</li>
                        <li>• Una letra minúscula</li>
                        <li>• Un número</li>
                        <li>
                            • Un carácter especial:
                            <span className="ml-1 font-medium">
                                @ # $ % & * ! ?
                            </span>
                        </li>
                    </ul>
                </div>
            )}

            {/* Contraseña vacía */}
            {showRequirements && error === "required" && (
                <p className="mt-1.5 text-sm text-red-600">
                    La contraseña es obligatoria
                </p>
            )}

            {/* Otros errores, ej. confirmar contraseña */}
            {!showRequirements && error && (
                <p className="mt-1.5 text-sm text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
}