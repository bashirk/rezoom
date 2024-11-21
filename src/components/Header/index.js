"use client";
import Link from "next/link";
import Logo from "./Logo";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState, useEffect } from "react";
import { cx } from "@/src/utils";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Handle header shrinking on scroll
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div
        className={cx(
          "w-full flex items-center justify-between px-6 lg:px-12 transition-all duration-300 fixed top-0 z-50",

          isSticky
            ? "py-2 bg-opacity-90 backdrop-blur-md"
            : "py-6 bg-opacity-100 backdrop-blur-md",
          mode === "light"
            ? "bg-white text-gray-800 shadow-md"
            : "bg-gray-900 text-gray-200 shadow-lg"
        )}
      >
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav
          className={cx(
            "hidden sm:flex items-center space-x-6 ml-auto" // Show only on small and larger screens
          )}
        >
          <Link
            href="/"
            className="text-lg dark:text-white font-medium hover:text-orange-600 dark:hover:text-yellow-400 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg dark:text-white font-medium hover:text-orange-600 dark:hover:text-yellow-400 transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-lg dark:text-white font-medium hover:text-orange-600 dark:hover:text-yellow-400 transition"
          >
            Contact
          </Link>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={cx(
              "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
              mode === "light"
                ? "bg-gray-800 text-gray-200"
                : "bg-gray-200 text-white"
            )}
            aria-label="Toggle Theme"
          >
            {mode === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="flex sm:hidden items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <span className="text-2xl font-bold text-black">&times;</span> // Close Icon
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          className={cx(
            "fixed inset-0 flex flex-col items-center justify-center z-40 transition-opacity duration-300",
            "bg-gradient-to-b from-white to-amber-200 dark:from-cyan-900 dark:to-slate-950 backdrop-blur-md",
            menuOpen ? "opacity-100" : "opacity-0"
          )}
        >
          <Link
            href="/"
            className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-200 hover:text-orange-600 dark:hover:text-yellow-400 transition"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-200 hover:text-orange-600 dark:hover:text-yellow-400 transition"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-200 hover:text-orange-600 dark:hover:text-yellow-400 transition"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <div className="flex items-center space-x-6 mt-8">
            <a
              href={siteMetadata.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-yellow-400 transition"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a
              href={siteMetadata.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-yellow-400 transition"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a
              href={siteMetadata.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-yellow-400 transition"
              aria-label="GitHub"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
          </div>
          <button
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light");
              toggleMenu();
            }}
            className={cx(
              "w-12 h-12 rounded-full flex items-center justify-center mt-8",
              mode === "light" ? "bg-gray-800 text-black" : "bg-gray-200 text-yellow-500"
            )}
            aria-label="Toggle Theme"
          >
            {mode === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
