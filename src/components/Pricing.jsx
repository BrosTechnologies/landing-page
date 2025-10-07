import { motion } from "framer-motion";

const plans = [
  {
    name: { es: "Básico", en: "Basic" },
    price: { es: "Gratis", en: "Free" },
    label: { es: "Prueba Gratis", en: "Free Trial" },
    features: [
      { es: "Gestión de Proyectos", en: "Project Management" },
      { es: "Colaboración en Equipo", en: "Team Collaboration" },
      { es: "Almacenamiento de Documentos", en: "Document Storage" },
      { es: "Seguimiento de Progreso", en: "Progress Tracking" },
    ],
    highlight: false,
    cta: { es: "Comenzar", en: "Get Started" },
    color: "primary/20",
    text: "primary",
    priceText: "gray-900 dark:text-white",
    border: "border-gray-200/80 dark:border-gray-700/60",
  },
  {
    name: { es: "Premium", en: "Premium" },
    price: { es: "$49", en: "$49" },
    label: null,
    features: [
      { es: "Todas las funciones básicas", en: "All Basic Features" },
      { es: "Reportes Avanzados", en: "Advanced Reporting" },
      { es: "Soporte Prioritario", en: "Priority Support" },
      { es: "Proyectos Ilimitados", en: "Unlimited Projects" },
    ],
    highlight: true,
    cta: { es: "Comenzar", en: "Get Started" },
    color: "primary",
    text: "white",
    priceText: "gray-900 dark:text-white",
    border: "border-primary",
  },
];

export default function Pricing({ language }) {
  return (
    <section
      className="bg-background-light dark:bg-background-dark py-16 sm:py-24"
      id="pricing"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {language === "es" ? "Planes de Precios" : "Pricing Plans"}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {language === "es"
              ? "Elige el plan ideal para ti."
              : "Choose the plan that's right for you."}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`flex flex-col gap-6 rounded-xl border ${
                plan.border
              } bg-white dark:bg-background-dark p-8 ${
                plan.highlight ? "border-primary" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <h3
                  className={`text-xl font-bold ${
                    plan.highlight
                      ? "text-primary"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {plan.name[language]}
                </h3>
                {plan.label && (
                  <p className="rounded-full bg-primary/20 dark:bg-primary/30 px-3 py-1 text-xs font-medium text-primary">
                    {plan.label[language]}
                  </p>
                )}
              </div>
              <div className="flex items-baseline gap-2">
                <span className={`text-4xl font-black ${plan.priceText}`}>
                  {plan.price[language]}
                </span>
                <span className="text-base font-bold text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div>
              <ul className="flex flex-col gap-4 text-sm text-gray-600 dark:text-gray-300">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <svg
                      className="text-primary"
                      fill="currentColor"
                      height="20"
                      viewBox="0 0 256 256"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                    {f[language]}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-auto flex h-10 w-full items-center justify-center overflow-hidden rounded-lg bg-${plan.color} px-4 text-sm font-bold text-${plan.text} transition-opacity hover:opacity-90`}
              >
                <span className="truncate">{plan.cta[language]}</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
