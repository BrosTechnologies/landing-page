import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg
        fill="currentColor"
        height="32"
        viewBox="0 0 256 256"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path>
      </svg>
    ),
    title: { es: "Planificación de Proyectos", en: "Project Planning" },
    desc: {
      es: "Crea cronogramas y plazos detallados.",
      en: "Create detailed project schedules and timelines.",
    },
  },
  {
    icon: (
      <svg
        fill="currentColor"
        height="32"
        viewBox="0 0 256 256"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M232,104a80,80,0,1,0-97,78.21V224a8,8,0,0,0,16,0V192h62a8,8,0,0,0,0-16H151V152.48A80.11,80.11,0,0,0,232,104ZM88,168a64,64,0,1,1,64-64A64.07,64.07,0,0,1,88,168Z"></path>
      </svg>
    ),
    title: { es: "Colaboración en Equipo", en: "Team Collaboration" },
    desc: {
      es: "Facilita la comunicación y asignación de tareas.",
      en: "Facilitate communication and task assignment within your team.",
    },
  },
  {
    icon: (
      <svg
        fill="currentColor"
        height="32"
        viewBox="0 0 256 256"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"></path>
      </svg>
    ),
    title: { es: "Gestión de Documentos", en: "Document Management" },
    desc: {
      es: "Almacena y gestiona documentos de forma segura.",
      en: "Securely store and manage all project-related documents.",
    },
  },
  {
    icon: (
      <svg
        fill="currentColor"
        height="32"
        viewBox="0 0 256 256"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path>
      </svg>
    ),
    title: { es: "Seguimiento de Progreso", en: "Progress Tracking" },
    desc: {
      es: "Monitorea el avance en tiempo real.",
      en: "Monitor project progress in real-time with visual dashboards.",
    },
  },
];

export default function Features({ language }) {
  return (
    <section
      className="bg-background-light dark:bg-background-dark py-16 sm:py-24"
      id="features"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {language === "es" ? "Características Clave" : "Key Features"}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {language === "es"
              ? "Optimiza tu flujo de trabajo"
              : "Streamline Your Workflow"}
          </p>
          <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
            {language === "es"
              ? "EngiTrack ofrece un conjunto completo de herramientas para gestionar cada aspecto de tus proyectos de construcción, desde la planificación hasta la finalización."
              : "EngiTrack provides a comprehensive suite of tools to manage every aspect of your construction projects, from planning to completion."}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="flex flex-col gap-4 rounded-lg border border-gray-200/80 dark:border-gray-700/60 bg-white dark:bg-background-dark p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-primary">{f.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {f.title[language]}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {f.desc[language]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
