import { CircleAlert } from "lucide-react";

const enfermeroFields = [
    {
        name: "matriculaProfesional",
        label: "Matrícula profesional",
        type: "text",
        placeholder: "Ingresá tu matrícula",
        required: true,
    },
    {
        name: "nivelProfesional",
        label: "Especialidad / Nivel",
        type: "text",
        placeholder: "Ej. Licenciado, Técnico, Auxiliar",
        required: true,
    },
    {
        name: "institucionEgreso",
        label: "Institución de egreso",
        type: "text",
        placeholder: "Ingresá la institución",
        required: true,
    },
    {
        name: "seguroMalaPraxis",
        label: "Seguro de mala praxis",
        type: "text",
        placeholder: "Ingresá tu seguro",
        required: true,
        fullWidth: true,
    },
];

const cuidadorFields = [
    {
        name: "zonaPrincipal",
        label: "Zona donde trabajás",
        type: "text",
        placeholder: "Ej. CABA, Zona Norte, etc.",
        required: true,
    },
    {
        name: "precioHora",
        label: "Tarifa por hora (ARS)",
        type: "number",
        placeholder: "Ej. 2500",
        min: "0",
        required: true,
    },
];

export default function RegisterProfessionalForm({
    formData,
    handleChange,
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

    const isNurse = formData.rol === "ENFERMERO";

    return (
        <section className="rounded-xl bg-teal-50 p-5">
            <h2 className="text-lg font-semibold text-gray-900">
                {isNurse
                    ? "Información profesional"
                    : "Información como cuidador"}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
                {isNurse
                    ? "Contanos un poco más sobre tu perfil profesional."
                    : "Contanos un poco más sobre tu servicio."}
            </p>

            {isNurse ? (
                <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {/* Matrícula profesional */}
                    <Field
                        field={enfermeroFields[0]}
                        formData={formData}
                        handleChange={handleChange}
                        error={errors?.matriculaProfesional}
                        getInputStyles={getInputStyles}
                    />

                    {/* Tipo de matrícula */}
                    <div>
                        <label
                            htmlFor="tipoMatricula"
                            className="mb-1.5 block text-sm font-medium text-gray-700"
                        >
                            Tipo de matrícula
                            <span className="ml-1 text-red-500">*</span>
                        </label>

                        <div className="relative">
                            <select
                                id="tipoMatricula"
                                name="tipoMatricula"
                                value={formData.tipoMatricula || ""}
                                onChange={handleChange}
                                className={`${getInputStyles(
                                    errors?.tipoMatricula
                                )} ${
                                    errors?.tipoMatricula
                                        ? "pr-10"
                                        : ""
                                }`}
                            >
                                <option value="">
                                    Seleccioná una opción
                                </option>

                                <option value="NACIONAL">
                                    Nacional
                                </option>

                                <option value="PROVINCIAL">
                                    Provincial
                                </option>
                            </select>

                            {errors?.tipoMatricula && (
                                <CircleAlert
                                    size={18}
                                    className="
                                        pointer-events-none
                                        absolute
                                        right-8
                                        top-1/2
                                        -translate-y-1/2
                                        text-red-500
                                    "
                                />
                            )}
                        </div>

                        {errors?.tipoMatricula && (
                            <p className="mt-1.5 text-xs text-red-600">
                                {errors.tipoMatricula}
                            </p>
                        )}
                    </div>

                    {/* Resto de campos de enfermero */}
                    {enfermeroFields.slice(1).map((field) => (
                        <Field
                            key={field.name}
                            field={field}
                            formData={formData}
                            handleChange={handleChange}
                            error={errors?.[field.name]}
                            getInputStyles={getInputStyles}
                        />
                    ))}
                </div>
            ) : (
                <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {/* Campos de cuidador */}
                    {cuidadorFields.map((field) => (
                        <Field
                            key={field.name}
                            field={field}
                            formData={formData}
                            handleChange={handleChange}
                            error={errors?.[field.name]}
                            getInputStyles={getInputStyles}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

function Field({
    field,
    formData,
    handleChange,
    error,
    getInputStyles,
}) {
    return (
        <div className={field.fullWidth ? "lg:col-span-2" : ""}>
            <label
                htmlFor={field.name}
                className="mb-1.5 block text-sm font-medium text-gray-700"
            >
                {field.label}

                {field.required && (
                    <span className="ml-1 text-red-500">*</span>
                )}
            </label>

            <div className="relative">
                <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    min={field.min}
                    className={`${getInputStyles(error)} ${
                        error ? "pr-10" : ""
                    }`}
                />

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

            {error && (
                <p className="mt-1.5 text-xs text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
}