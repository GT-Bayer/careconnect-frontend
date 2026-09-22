import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { authService } from "../services/authService";

import { ValidatePersonalData } from "../components/validations/PersonalDataValidation";
import { ValidateProfessionalData } from "../components/validations/ProfessionalDataValidation";

import Navbar from "../components/layout/Navbar";
import RegisterPersonalData from "../components/auth/RegisterPersonalData";
import RegisterProfessionalForm from "../components/auth/RegisterProfessionalForm";
import RegisterRoleSelector from "../components/auth/RegisterRoleSelector";
import RegisterWelcome from "../components/auth/RegisterWelcome";
import SuccessToast from "../components/ui/SuccessToast";

export default function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        // Datos personales
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        telefono: "",
        dni: "",

        // Rol
        rol: "FAMILIAR",

        // Cuidador
        zonaPrincipal: "",
        precioHora: "",

        // Enfermero
        matriculaProfesional: "",
        tipoMatricula: "",
        nivelProfesional: "",
        institucionEgreso: "",
        seguroMalaPraxis: "",
    });

    // Solo se utiliza en el frontend
    const [confirmPassword, setConfirmPassword] = useState("");

    // Errores del formulario
    const [errors, setErrors] = useState({});

    const [showSuccess, setShowSuccess] = useState(false);

    // Sección profesional
    const professionalSectionRef = useRef(null);

    const handleChange = (e) => {
    const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name !== "password") {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);

        setErrors((prev) => ({
            ...prev,
            confirmPassword: "",
        }));
    };

    const handleRoleChange = (rol) => {
        setFormData((prev) => ({
            ...prev,
            rol,
        }));

        setErrors((prev) => {
            const {
                zonaPrincipal,
                precioHora,
                matriculaProfesional,
                tipoMatricula,
                nivelProfesional,
                institucionEgreso,
                seguroMalaPraxis,
                ...rest
            } = prev;

            return rest;
        });

        if (rol === "CUIDADOR" || rol === "ENFERMERO") {
            setTimeout(() => {
                professionalSectionRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }, 100);
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const personalErrors = ValidatePersonalData(
            formData,
            confirmPassword
        );

        const professionalErrors =
            ValidateProfessionalData(formData);

        const validationErrors = {
            ...personalErrors,
            ...professionalErrors,
        };

        console.log("ERRORES:", validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});

        try {
            await authService.register(formData);

            setShowSuccess(true);

            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (error) {
            console.error("Error al registrar:", error);
            alert("Error al registrar usuario");
        }
    };


    return (
        <div className="min-h-screen bg-white">
            <Navbar variant="register" />

            {showSuccess && (
                <SuccessToast
                    title="¡Cuenta creada con éxito!"
                    message="Tu registro se completó correctamente."
                    onClose={() => setShowSuccess(false)}
                />
            )}

            <main
                className="
                    min-h-[calc(100vh-73px)]
                    bg-teal-50/30
                    lg:flex
                "
            >
                <RegisterWelcome />

                <section
                    className="
                        w-full
                        px-6 py-8
                        sm:px-8
                        lg:w-7/12
                        lg:px-12
                        lg:py-6
                        xl:px-16
                        2xl:px-20
                    "
                >
                    <div
                        className="
                            mx-auto
                            w-full
                            max-w-md
                            rounded-2xl
                            bg-white
                            sm:max-w-xl
                            lg:max-w-3xl
                            lg:p-8
                            lg:shadow-sm
                        "
                    >
                        {/* Encabezado */}
                        <div className="mb-6">
                            <p
                                className="
                                    mb-3
                                    flex
                                    items-center
                                    gap-3
                                    text-sm
                                    font-medium
                                    text-gray-500
                                "
                            >
                                <span
                                    className="
                                        h-1
                                        w-10
                                        rounded-full
                                        bg-teal-600
                                    "
                                />

                                Creá tu cuenta
                            </p>

                            <h1
                                className="
                                    text-2xl
                                    font-bold
                                    text-gray-900
                                    lg:text-3xl
                                "
                            >
                                Tus datos personales
                            </h1>

                            <p className="mt-1 text-sm text-gray-500">
                                Completá tus datos para empezar.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="flex w-full flex-col gap-6"
                            noValidate
                        >
                            {/* Datos personales */}
                            <RegisterPersonalData
                                formData={formData}
                                handleChange={handleChange}
                                confirmPassword={confirmPassword}
                                handleConfirmPasswordChange={
                                    handleConfirmPasswordChange
                                }
                                errors={errors}
                            />

                            {/* Selección de rol */}
                            <RegisterRoleSelector
                                selectedRole={formData.rol}
                                onRoleChange={handleRoleChange}
                            />

                            {/* Datos según el rol */}
                            {(formData.rol === "CUIDADOR" ||
                                formData.rol === "ENFERMERO") && (
                                <div ref={professionalSectionRef}>
                                    <RegisterProfessionalForm
                                        formData={formData}
                                        handleChange={handleChange}
                                        errors={errors}
                                    />
                                </div>
                            )}

                            <button
                                type="submit"
                                className="
                                    w-full
                                    rounded-lg
                                    bg-gradient-to-r
                                    from-teal-600
                                    to-teal-500
                                    px-4
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-white
                                    shadow-sm
                                    transition
                                    hover:from-teal-700
                                    hover:to-teal-600
                                "
                            >
                                Crear cuenta
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}