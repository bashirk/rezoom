// page.js
import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";
import Head from 'next/head';

export const metadata = {
  title: "About Me",
  description: "Discover my professional journey, skills, and passion for technology.",
};

export default function About() {
  return (
    <>
      <Head>
        {/* Google AdSense Script */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5111592454908081" 
          crossOrigin="anonymous"
        ></script>
      </Head>
      
      <div className="w-full">
        {/* About Cover Section */}
        <AboutCoverSection />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Call to Action */}
        <section className="bg-gray-100 py-12 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Let's collaborate and bring your ideas to life! 🚀
            </p>
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-6 py-3 rounded-full 
              hover:bg-blue-700 transition duration-300 inline-flex items-center"
            >
              <span className="mr-2">Reach Out</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}