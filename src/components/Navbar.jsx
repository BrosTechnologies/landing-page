import { useState } from "react";
import logo from "../assets/logo.png";

const LANGUAGES = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
];

export default function Navbar({ language, setLanguage }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-700/50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8">
              <img
                src={logo}
                alt="Logo EngiTrack"
                className="h-8 w-8 object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              EngiTrack
            </h2>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <a
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              href="#"
            >
              Home
            </a>
            <a
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              href="#features"
            >
              Features
            </a>
            <a
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              href="#pricing"
            >
              Pricing
            </a>
            <a
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              href="#contact"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="flex h-10 min-w-[84px] items-center justify-center overflow-hidden rounded-lg bg-primary px-4 text-sm font-bold text-white transition-opacity hover:opacity-90">
              <span className="truncate">Get Started</span>
            </button>
            <button className="flex h-10 min-w-[84px] items-center justify-center overflow-hidden rounded-lg bg-primary/20 dark:bg-primary/30 px-4 text-sm font-bold text-primary transition-opacity hover:opacity-90">
              <span className="truncate">Login</span>
            </button>
            <select
              className="ml-2 rounded-lg border border-gray-300 bg-white dark:bg-background-dark dark:border-gray-600 px-2 py-1 text-sm text-gray-900 dark:text-white"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
