import adultoMayor from "../../assets/adulto_mayor.png";
import logo from "../../assets/logo_careconnect.png";

const HeroSection = () => {
  return (
    <section className="flex-1 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:py-24">
        
        <div className="flex-1 text-center md:text-left">
          <img
            src={logo}
            alt="CareConnect"
            className="mx-auto mb-6 h-12 w-auto md:mx-0"
          />

          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Cuidado y compañía cuando más lo necesitás
          </h1>

          <p className="mb-8 max-w-xl text-lg text-gray-600">
            Conectamos familias con profesionales de confianza para brindar
            el cuidado que cada persona necesita.
          </p>

          <a
            href="/register"
            className="inline-block rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-teal-700"
          >
            Comenzar ahora
          </a>
        </div>

        <div className="flex-1">
          <img
            src={adultoMayor}
            alt="Persona mayor acompañada"
            className="mx-auto w-full max-w-lg rounded-2xl object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;