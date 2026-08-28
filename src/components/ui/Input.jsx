import { useId } from "react";

export default function Input({
  label,
  error,
  type = "text",
  required = false,
  disabled = false,
  className = "",
  id: customId,
  ...props
}) {
  // 1. Identificadores accesibles
  const autoId = useId();
  const inputId = customId || autoId;
  const errorId = `${inputId}-error`;

  // 2. Control visual de error
  const borderStyles = error
    ? "border-red-500 focus:ring-red-500 focus:border-red-500 text-red-900"
    : "border-gray-300 focus:ring-teal-500 focus:border-teal-500 text-gray-900";

  return (
    <div className="w-full flex flex-col gap-1.5">
      {/* Label integrado */}
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-gray-700 flex items-center gap-1"
        >
          {label}
          {required && (
            <span className="text-red-500" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      {/* Input nativo */}
      <input
        id={inputId}
        type={type}
        disabled={disabled}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`w-full px-3 py-2 bg-white border rounded-lg shadow-sm text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors duration-150 ${borderStyles} ${className}`}
        {...props}
      />

      {/* Mensaje de error */}
      {error && (
        <p id={errorId} className="text-xs text-red-600 font-medium">
          {error}
        </p>
      )}
    </div>
  );
}
