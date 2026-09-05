import React from "react";

export default function Button(props) {
  const {
    children,
    variant = "primary",
    size = "md",
    isLoading = false,
    disabled = false,
    type = "button",
    className = "",
    ...restProps
  } = props;

  // Variantes visuales
  const variants = {
    primary:
      "bg-orange-400 hover:bg-orange-500 text-white focus-visible:ring-orange-400 shadow-sm",
    secondary:
      "bg-slate-800 hover:bg-slate-900 text-white focus-visible:ring-slate-700 shadow-sm",
    outline:
      "border border-blue-500 bg-transparent hover:bg-blue-50 text-blue-600 focus-visible:ring-blue-400",
    ghost:
      "bg-transparent hover:bg-gray-100 text-gray-700 focus-visible:ring-gray-400",
    danger:
      "bg-red-600 hover:bg-red-700 text-white focus-visible:ring-red-500 shadow-sm",
  };

  // Tipografías y espaciados
  const sizes = {
    sm: "px-3 py-1.5 text-xs rounded-md font-medium",
    md: "px-4 py-2 text-sm rounded-lg font-medium",
    lg: "px-5 py-2.5 text-base rounded-lg font-semibold",
  };

  // Estado bloqueado:
  const isDisabled = disabled || isLoading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={isLoading}
      className={`inline-flex items-center justify-center gap-2 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
      {...restProps}
    >
      {/* SPINNER DE CARGA */}
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-1 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
