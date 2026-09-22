import {
    Heart,
    ShieldCheck,
    Users,
} from "lucide-react";

import registerCareImage from "../../assets/registro.png";

const benefits = [
    {
        title: "Confianza",
        description: "Perfiles verificados y seguros.",
        icon: ShieldCheck,
    },
    {
        title: "Cuidado real",
        description: "Personas que hacen la diferencia.",
        icon: Heart,
    },
    {
        title: "Comunidad",
        description: "Juntos por una mejor calidad de vida.",
        icon: Users,
    },
];

export default function RegisterWelcome() {
    return (
        <aside
            className="
                hidden
                bg-teal-50
                lg:flex
                lg:w-5/12
                lg:flex-col
                lg:px-16
                lg:py-8
                xl:px-20
                2xl:px-24
            "
        >
            {/* Encabezado */}
            <div>
                <p className="text-sm font-semibold text-teal-700">
                    Personas que cuidan, vidas que se conectan
                </p>

                <div className="mt-5 h-0.5 w-7 bg-teal-600" />

                <h2
                    className="
                        mt-5
                        max-w-md
                        text-4xl
                        font-bold
                        leading-tight
                        text-gray-900
                    "
                >
                    Bienvenido a
                    <br />
                    CareConnect
                </h2>

                <p className="mt-4 max-w-md text-base leading-7 text-gray-600">
                    Sumate a una comunidad que conecta familias con personas
                    dedicadas al cuidado.
                </p>

                {/* Beneficios */}
                <div className="mt-7 flex flex-col gap-5">
                    {benefits.map((benefit) => {
                        const Icon = benefit.icon;

                        return (
                            <div
                                key={benefit.title}
                                className="flex items-center gap-4"
                            >
                                <div
                                    className="
                                        flex
                                        h-12 w-12
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-teal-100
                                    "
                                >
                                    <Icon
                                        size={24}
                                        strokeWidth={2}
                                        className="text-teal-700"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900">
                                        {benefit.title}
                                    </h3>

                                    <p className="mt-0.5 text-sm text-gray-500">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Ilustración */}
            <div className="mt-5 flex justify-center">
                <img
                    src={registerCareImage}
                    alt="Cuidadora acompañando a una persona mayor"
                    className="
                        w-full
                        max-w-[340px]
                        object-contain
                        xl:max-w-[380px]
                    "
                />
            </div>
        </aside>
    );
}