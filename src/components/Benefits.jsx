import { motion } from "framer-motion";

const benefits = [
  {
    icon: (
      <svg
        fill="currentColor"
        height="24"
        viewBox="0 0 256 256"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
      </svg>
    ),
    title: { es: "Ahorra Tiempo", en: "Save Time" },
    desc: {
      es: "Gestiona tus proyectos eficientemente y cumple plazos.",
      en: "Efficiently manage your projects and meet deadlines.",
    },
  },
  {
    icon: (
      <svg
        fill="currentColor"
        height="24"
        viewBox="0 0 256 256"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM240,56H16a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V64A8,8,0,0,0,240,56ZM193.65,184H62.35A56.78,56.78,0,0,0,24,145.65v-35.3A56.78,56.78,0,0,0,62.35,72h131.3A56.78,56.78,0,0,0,232,110.35v35.3A56.78,56.78,0,0,0,193.65,184Z"></path>
      </svg>
    ),
    title: { es: "Reduce Costos", en: "Reduce Costs" },
    desc: {
      es: "Optimiza recursos y minimiza gastos.",
      en: "Optimize resource allocation and minimize expenses.",
    },
  },
  {
    icon: (
      <svg
        fill="currentColor"
        height="24"
        viewBox="0 0 256 256"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
      </svg>
    ),
    title: { es: "Mejora la Seguridad", en: "Improve Safety" },
    desc: {
      es: "Ambiente de trabajo más seguro y coordinado.",
      en: "Ensure a safer work environment with better coordination.",
    },
  },
];

export default function Benefits({ language }) {
  return (
    <section className="py-16 sm:py-24" id="benefits">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {language === "es"
              ? "Logra más con EngiTrack"
              : "Achieve More with EngiTrack"}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {language === "es"
              ? "Experimenta la diferencia con EngiTrack y lleva la gestión de tus proyectos de construcción al siguiente nivel."
              : "Experience the difference with EngiTrack and take your construction project management to the next level."}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                {b.icon}
              </div>
              <h3 className="mt-6 text-lg font-bold text-gray-900 dark:text-white">
                {b.title[language]}
              </h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                {b.desc[language]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
