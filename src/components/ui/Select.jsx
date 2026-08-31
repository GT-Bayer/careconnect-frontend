import React, { useId } from "react";

export default function Select(props) {
  const {
    label,
    options = [],
    error,
    disabled = false,
    required = false,
    className = "",
    id: customId,
    placeholder = "Selecciona una opción",
    ...restProps
  } = props;

  const autoId = useId();
  const selectId = customId || autoId;
  const errorId = `${selectId}-error`;

  // Bordes y foco
  const borderStyles = error
    ? "border-red-500 focus:ring-red-500 focus:border-red-500 text-red-900"
    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900";

  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={selectId}
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

      <div className="relative w-full">
        <select
          id={selectId}
          disabled={disabled}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`w-full px-3 py-2 pr-10 bg-white border rounded-lg shadow-sm text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors duration-150 ${borderStyles} ${className}`}
          {...restProps}
        >
          {/* Placeholder */}
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}

          {options.map((option, index) => {
            const isObject = typeof option === "object" && option !== null;
            const optValue = isObject ? option.value : option;
            const optLabel = isObject ? option.label : option;

            return (
              <option key={optValue || index} value={optValue}>
                {optLabel}
              </option>
            );
          })}
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-500">
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {error && (
        <p id={errorId} className="text-xs text-red-600 font-medium">
          {error}
        </p>
      )}
    </div>
  );
}
