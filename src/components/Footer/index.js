"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-16 px-6 sm:px-12">
      {/* Footer Container with Rounded Edges */}
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-yellow-100 to-orange-300 dark:from-amber-100 dark:to-yellow-300 rounded-xl p-12 shadow-lg">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Newsletter Section */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
              Join the community mailing list
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg max-w-xl">
              Subscribe to learn about new updates. Join over 10,000 community members to stay up to date with the latest insights and perspectives.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex items-center border-2 border-gray-300 dark:border-gray-700 rounded-full overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true, maxLength: 80 })}
                className="flex-grow px-4 py-3 bg-transparent text-gray-800 dark:text-gray-100 placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg flex items-center gap-2 transition-all"
              >
                <span>Subscribe</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h12m0 0l-4 4m4-4l-4-4"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Social and Quick Links */}
          <div className="space-y-6">
            <div className="flex space-x-6 justify-center md:justify-end">
              {[
                { Icon: LinkedinIcon, href: siteMetadata.linkedin, label: "LinkedIn" },
                { Icon: TwitterIcon, href: siteMetadata.twitter, label: "Twitter" },
                { Icon: GithubIcon, href: siteMetadata.github, label: "GitHub" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-yellow-400 transition-colors duration-300 group"
                  aria-label={`Reach out via ${label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-700 text-center md:text-left">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-gray-700 dark:text-gray-400">
            <span className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Refume. All rights reserved.
            </span>

            <div className="flex items-center space-x-4">
              <Link
                href="/sitemap.xml"
                className="hover:text-orange-600 dark:hover:text-yellow-400 transition-colors"
              >
                Sitemap
              </Link>

              <span>•</span>

              <span>
                Made with <span className="text-red-500">❤️</span> by{" "}
                <a
                  href="https://refume.vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-orange-600 dark:hover:text-yellow-400 transition-colors"
                >
                  Korede
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
