import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact({ language }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <section className="py-16 sm:py-24" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {language === "es" ? "Contáctanos" : "Contact Us"}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {language === "es"
              ? "¿Tienes preguntas? Nos encantaría saber de ti."
              : "Have questions? We'd love to hear from you."}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-lg relative">
          {showPopup && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute left-1/2 top-1/2 z-10 w-2/3 -translate-x-1/2 rounded-lg bg-green-500 px-4 py-2 text-center text-white shadow-lg"
            >
              {language === "es" ? "¡Mensaje enviado!" : "Message sent!"}
            </motion.div>
          )}
          <motion.form
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-input h-12 w-full rounded-lg border-gray-300 bg-white dark:bg-background-dark dark:border-gray-600 p-4 text-base text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary focus:ring-primary"
              placeholder={language === "es" ? "Tu Nombre" : "Your Name"}
              required
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="form-input h-12 w-full rounded-lg border-gray-300 bg-white dark:bg-background-dark dark:border-gray-600 p-4 text-base text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary focus:ring-primary"
              placeholder={language === "es" ? "Tu Correo" : "Your Email"}
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="form-input min-h-36 w-full resize-y rounded-lg border-gray-300 bg-white dark:bg-background-dark dark:border-gray-600 p-4 text-base text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary focus:ring-primary"
              placeholder={language === "es" ? "Tu Mensaje" : "Your Message"}
              required
            ></textarea>
            <button
              type="submit"
              className="flex h-12 min-w-[84px] items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-base font-bold text-white transition-opacity hover:opacity-90"
            >
              <span className="truncate">
                {language === "es" ? "Enviar Mensaje" : "Send Message"}
              </span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
