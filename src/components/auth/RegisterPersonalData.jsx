import { CircleAlert } from "lucide-react";
import PasswordInput from "../ui/PasswordInput";

const fields = [
    {
        name: "nombre",
        label: "Nombre",
        type: "text",
        placeholder: "Ingresá tu nombre",
        autoComplete: "given-name",
        required: true,
        fullWidth: false,
    },
    {
        name: "apellido",
        label: "Apellido",
        type: "text",
        placeholder: "Ingresá tu apellido",
        autoComplete: "family-name",
        required: true,
        fullWidth: false,
    },
    {
        name: "email",
        label: "Correo electrónico",
        type: "email",
        placeholder: "nombre@ejemplo.com",
        autoComplete: "email",
        required: true,
        fullWidth: true,
    },
    {
        name: "telefono",
        label: "Teléfono",
        type: "tel",
        placeholder: "11 1234 5678",
        autoComplete: "tel",
        required: true,
        fullWidth: false,
    },
    {
        name: "dni",
        label: "DNI",
        type: "text",
        placeholder: "Ingresá tu DNI",
        inputMode: "numeric",
        required: true,
        fullWidth: false,
    },
];

export default function RegisterPersonalData({
    formData,
    handleChange,
    confirmPassword,
    handleConfirmPasswordChange,
    errors,
}) {
    const getInputStyles = (hasError) => `
        w-full
        rounded-lg
        border
        bg-white
        px-3 py-2.5
        text-sm text-gray-900
        placeholder:text-gray-400
        outline-none
        transition
        ${
            hasError
                ? `
                    border-red-400
                    focus:border-red-500
                    focus:ring-2
                    focus:ring-red-100
                `
                : `
                    border-gray-300
                    focus:border-teal-600
                    focus:ring-2
                    focus:ring-teal-100
                `
        }
    `;

    return (
        <section>
            <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
                {/* Campos personales */}
                {fields.map((field) => {
                    const error = errors?.[field.name];

                    return (
                        <div
                            key={field.name}
                            className={
                                field.fullWidth
                                    ? "lg:col-span-2"
                                    : ""
                            }
                        >
                            <label
                                htmlFor={field.name}
                                className="
                                    mb-1.5
                                    block
                                    text-sm
                                    font-medium
                                    text-gray-700
                                "
                            >
                                {field.label}

                                {field.required && (
                                    <span className="ml-1 text-red-500">
                                        *
                                    </span>
                                )}
                            </label>

                            <div className="relative">
                                <input
                                    id={field.name}
                                    name={field.name}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    autoComplete={field.autoComplete}
                                    inputMode={field.inputMode}
                                    className={`${getInputStyles(
                                        error
                                    )} ${error ? "pr-10" : ""}`}
                                />

                                {/* Flag de error */}
                                {error && (
                                    <CircleAlert
                                        size={18}
                                        className="
                                            absolute
                                            right-3
                                            top-1/2
                                            -translate-y-1/2
                                            text-red-500
                                        "
                                    />
                                )}
                            </div>

                            {/* Mensaje de error */}
                            {error && (
                                <p className="mt-1.5 text-xs text-red-600">
                                    {error}
                                </p>
                            )}
                        </div>
                    );
                })}

                {/* Contraseña */}
                <PasswordInput
                    id="password"
                    name="password"
                    label="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Ingresá tu contraseña"
                    error={errors?.password}
                    showRequirements={true}
                />

                {/* Confirmar contraseña */}
                <PasswordInput
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirmar contraseña"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    placeholder="Repetí tu contraseña"
                    error={errors?.confirmPassword}
                    required
                />
            </div>
        </section>
    );
}