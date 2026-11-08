import { Code2, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Desy Ui",
      "Shadcn",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "MongoDB", "REST API", "Better Auth"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "npm"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-emerald-400">
            My Expertise
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Technical <span className="text-emerald-400">Skills</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Technologies and tools I use to build modern, responsive, and
            functional web applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="rounded-xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-emerald-400/50"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-emerald-500/10 p-3 text-emerald-400">
                    <Icon size={25} />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:bg-emerald-500 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
