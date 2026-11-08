import Link from "next/link";
import { Github, Linkedin, Facebook, Heart } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-900 px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <Link href="/" className="text-2xl font-bold text-emerald-400">
          Pranta.
        </Link>

        <p className="text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Pranta Dev. All rights reserved.
        </p>

        <div className="flex gap-5">
          <a
            href="https://github.com/pranta77"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              size={22}
              className="text-slate-400 transition hover:text-emerald-400"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/pranta-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin
              size={22}
              className="text-slate-400 transition hover:text-emerald-400"
            />
          </a>

          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebook
              size={22}
              className="text-slate-400 transition hover:text-emerald-400"
            />
          </a>
        </div>
      </div>

      <p className="mt-6 flex items-center justify-center gap-1 text-xs text-slate-500">
        Made with <Heart size={13} className="text-red-400" /> by Pranta
      </p>
    </footer>
  );
};

export default Footer;
