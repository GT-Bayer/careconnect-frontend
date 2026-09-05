const TestimonialsSection = () => {
  // TODO: Reemplazar estos testimonioss de ejemplo con datos reales del back
  const testimonials = [
    {
      name: "María",
      role: "Familiar",
      text: "Encontrar una persona de confianza para acompañar a mi familiar fue mucho más sencillo.",
    },
    {
      name: "Carlos",
      role: "Familiar",
      text: "CareConnect me permitió encontrar una opción que se adaptaba a nuestras necesidades.",
    },
    {
      name: "Laura",
      role: "Profesional",
      text: "La plataforma facilita mucho la conexión entre profesionales y familias.",
    },
  ];

  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Lo que dicen nuestros usuarios
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Conocé las experiencias de quienes forman parte de CareConnect.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
            >
              <p className="mb-6 text-gray-600">
                “{testimonial.text}”
              </p>

              <div>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>

                <p className="text-sm text-teal-600">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;