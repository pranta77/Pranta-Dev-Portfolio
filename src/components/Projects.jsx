import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import projects from "@/data/projects";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-emerald-400">
            My Recent Work
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Some of the projects I&apos;ve built using modern web technologies
            and development practices.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-emerald-400/50"
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{project.name}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Buttons */}
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex items-center gap-2 font-semibold text-emerald-400 transition hover:text-emerald-300"
                  >
                    View Details
                    <ArrowUpRight size={18} />
                  </Link>

                  <a
                    href={project.clientRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} GitHub repository`}
                    className="text-slate-400 transition hover:text-emerald-400"
                  >
                    <FaGithub size={22} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
