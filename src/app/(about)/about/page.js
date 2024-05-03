import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";
import Head from 'next/head';


export const metadata = {
  title: "About Me",
  description: `Here are some details about my self.`,
};

export default function About() {
  return (
    <>
    <Head>
      {/* Add the script to load Google AdSense */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5111592454908081"
        crossOrigin="anonymous"
      />
    </Head>
      <AboutCoverSection />
      <Skills />
      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal"> Have a project in mind? Reach out to me 📞 from <Link href="/contact"  className="!underline underline-offset-2" >here</Link> and let's make it happen.</h2>

    </>
  );
}
