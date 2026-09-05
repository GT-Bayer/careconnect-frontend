export default function RegisterProfessionalForm({
    formData,
    handleChange
}) {
    return (
        <>
            {formData.rol === "ENFERMERO" && (
                <>
                    <input
                        type="text"
                        name="matriculaProfesional"
                        placeholder="Matrícula profesional"
                        value={formData.matriculaProfesional || ""}
                        onChange={handleChange}
                    />

                    <select
                        name="tipoMatricula"
                        value={formData.tipoMatricula || ""}
                        onChange={handleChange}
                    >
                        <option value="">Tipo de matrícula</option>
                        <option value="NACIONAL">Nacional</option>
                        <option value="PROVINCIAL">Provincial</option>
                    </select>

                    <input
                        type="text"
                        name="nivelProfesional"
                        placeholder="Especialidad / Nivel (ej. Licenciado, Técnico, Auxiliar)"
                        value={formData.nivelProfesional || ""}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="institucionEgreso"
                        placeholder="Institución de egreso"
                        value={formData.institucionEgreso || ""}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="seguroMalaPraxis"
                        placeholder="Seguro de mala praxis"
                        value={formData.seguroMalaPraxis || ""}
                        onChange={handleChange}
                    />
                </>
            )}

            {formData.rol === "CUIDADOR" && (
                <>
                    <input
                        type="text"
                        name="zonaPrincipal"
                        placeholder="Zona"
                        value={formData.zonaPrincipal || ""}
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="precioHora"
                        placeholder="Tarifa por hora ($)"
                        value={formData.precioHora || ""}
                        onChange={handleChange}
                        min="0"
                    />
                </>
            )}
        </>
    );
}