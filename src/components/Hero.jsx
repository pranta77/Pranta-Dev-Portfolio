import Image from "next/image";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-5 pt-28 pb-16"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* Introduction */}
        <div>
          <p className="mb-4 font-medium text-emerald-400">Hello, I&apos;m</p>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Pranta Dev
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-slate-300 sm:text-3xl">
            Full-Stack Web Developer
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-slate-400">
            I&apos;m a passionate web developer who enjoys building modern,
            responsive, and user-friendly web applications. I love learning new
            technologies and turning creative ideas into real-world digital
            experiences.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
            >
              <Download size={18} />
              Download Resume
            </a>

            <Link
              href="#projects"
              className="flex items-center gap-2 rounded-lg border border-emerald-400 px-6 py-3 font-semibold text-emerald-400 transition hover:bg-emerald-400 hover:text-white"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-5">
            <a
              href="https://github.com/pranta77"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition hover:text-emerald-400"
            >
              <FaGithub size={25} />
            </a>

            <a
              href="https://www.linkedin.com/in/pranta-dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition hover:text-emerald-400"
            >
              <FaLinkedin size={25} />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-slate-400 transition hover:text-emerald-400"
            >
              <FaFacebook size={25} />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-emerald-400 shadow-2xl shadow-emerald-500/20 sm:h-96 sm:w-96">
            <Image
              //   src="/images/Black Profile.png"
              src="/images/Half.jpg"
              alt="Pranta Dev - Full Stack Web Developer"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 640px) 288px, 384px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
