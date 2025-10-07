import { motion } from "framer-motion";

export default function HeroSection({ language }) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col gap-4 text-left">
              <h1 className="text-4xl font-black tracking-tighter text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                {language === "es"
                  ? "Gestiona tus proyectos de construcción eficientemente"
                  : "Manage Your Construction Projects Efficiently"}
              </h1>
              <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300">
                {language === "es"
                  ? "EngiTrack es la plataforma líder para la gestión de proyectos de construcción, ofreciendo herramientas para planificación, colaboración y seguimiento. Disponible en español e inglés."
                  : "EngiTrack is the leading platform for construction project management, offering tools for planning, collaboration, and tracking. Available in both English and Spanish."}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="flex h-12 min-w-[84px] items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-base font-bold text-white transition-opacity hover:opacity-90">
                <span className="truncate">
                  {language === "es" ? "Comenzar" : "Get Started"}
                </span>
              </button>
              <button className="flex h-12 min-w-[84px] items-center justify-center overflow-hidden rounded-lg bg-primary/20 dark:bg-primary/30 px-6 text-base font-bold text-primary transition-opacity hover:opacity-90">
                <span className="truncate">
                  {language === "es" ? "Saber más" : "Learn More"}
                </span>
              </button>
            </div>
          </motion.div>
          <motion.div
            className="aspect-video w-full rounded-xl bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAz5ZJit_GLS2ds-E26LMl7qXVq6kKdOfCnMAwjlTpcHbQwq9IsWZ4Qkkt_qk9MgdHuBWADCcOUO1wUJOGY0_irPzPm6hAA40CdkZzSkFS578QuYeYmtLsOTsBqr_cRNRAnzH0L5_R2fyp4O-cXBr-klhzp63NNPQr8CYgKYH1UDc8phWThWVE5Vm-ca49Ml6A--J2XKMezMubzePV6m5-orFtRoeUDcO8ppH2rNJf02s9qK2Y5UURu1fKW-Toekwsxb39JD-Q4HVc')",
            }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
