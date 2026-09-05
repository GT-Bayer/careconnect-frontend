const FeaturesSection = () => {
  const features = [
    {
      title: "Profesionales de confianza",
      description:
        "Encontrá cuidadores y profesionales preparados para brindar el mejor acompañamiento.",
    },
    {
      title: "Conexión sencilla",
      description:
        "Conectamos familias y profesionales de manera simple y rápida.",
    },
    {
      title: "Cuidado personalizado",
      description:
        "Elegí la opción que mejor se adapte a las necesidades de cada persona.",
    },
  ];

  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            ¿Por qué elegir CareConnect?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Una forma simple de encontrar el acompañamiento adecuado.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <h3 className="mb-3 text-xl font-semibold text-teal-600">
                {feature.title}
              </h3>

              <p className="text-gray-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;