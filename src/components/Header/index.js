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
    <header
      className={cx(
        "w-full backdrop-blur-sm fixed top-0 left-0 z-50 transition-all duration-300",
        isSticky
          ? "py-2 bg-opacity-90 backdrop-blur-md"
          : "py-4",
        mode === "light"
          ? "bg-white text-gray-800 shadow-md"
          : "bg-gray-900 text-gray-200 shadow-lg"
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center space-x-6">
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
              mode === "light" ? "bg-gray-800 text-gray-200" : "bg-gray-200 text-white"
            )}
            aria-label="Toggle Theme"
          >
            {mode === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-black dark:bg-gray-200 dark:text-white"
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
            "fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-40 transition-transform transform",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <Link
            href="/"
            className="text-2xl font-semibold mb-6 hover:text-orange-600 dark:hover:text-yellow-400 transition"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-2xl font-semibold mb-6 hover:text-orange-600 dark:hover:text-yellow-400 transition"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-2xl font-semibold mb-6 hover:text-orange-600 dark:hover:text-yellow-400 transition"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <button
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light");
              toggleMenu();
            }}
            className={cx(
              "w-12 h-12 rounded-full flex items-center justify-center transition-colors mt-8",
              mode === "light" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
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
