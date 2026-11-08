import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { ArrowLeft, ExternalLink, CheckCircle2, Lightbulb } from "lucide-react";

import projects from "@/data/projects";

const ProjectDetails = async ({ params }) => {
  const { id } = await params;

  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen px-5 pb-20 pt-32">
      <div className="mx-auto max-w-5xl">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-slate-400 transition hover:text-emerald-400"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        {/* Project Image */}
        <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-800">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1024px"
            className="object-contain"
          />
        </div>

        {/* Project Introduction */}
        <div>
          <p className="font-semibold uppercase tracking-widest text-emerald-400">
            Project Details
          </p>

          <h1 className="mt-3 text-3xl font-bold text-white sm:text-5xl">
            {project.name}
          </h1>

          <p className="mt-5 max-w-3xl leading-8 text-slate-400">
            {project.description}
          </p>
        </div>

        {/* Technology Stack */}
        <section className="mt-12">
          <h2 className="mb-5 text-2xl font-bold text-white">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Project Links */}
        <section className="mt-12">
          <h2 className="mb-5 text-2xl font-bold text-white">Project Links</h2>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-white transition hover:bg-emerald-600"
            >
              Live Project
              <ExternalLink size={18} />
            </a>

            <a
              href={project.clientRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-400"
            >
              <FaGithub size={18} />
              Client Repository
            </a>

            <a
              href={project.serverRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-400"
            >
              <FaGithub size={18} />
              Server Repository
            </a>
          </div>
        </section>

        {/* Challenges */}
        <section className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <CheckCircle2 className="text-emerald-400" size={25} />
            <h2 className="text-2xl font-bold text-white">Challenges Faced</h2>
          </div>

          <ul className="space-y-4">
            {project.challenges.map((challenge, index) => (
              <li key={index} className="flex gap-3 leading-7 text-slate-400">
                <span className="text-emerald-400">•</span>
                {challenge}
              </li>
            ))}
          </ul>
        </section>

        {/* Future Improvements */}
        <section className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <Lightbulb className="text-emerald-400" size={25} />
            <h2 className="text-2xl font-bold text-white">
              Future Improvements
            </h2>
          </div>

          <ul className="space-y-4">
            {project.improvements.map((improvement, index) => (
              <li key={index} className="flex gap-3 leading-7 text-slate-400">
                <span className="text-emerald-400">•</span>
                {improvement}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default ProjectDetails;
