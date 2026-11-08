import { BriefcaseBusiness, GraduationCap } from "lucide-react";

const experienceData = [
  {
    position: "Teacher",
    company: "Singhara Ramkanai High School",
    duration: "2023 - Present",
    description:
      "Working as a teacher, helping students learn, developing communication skills, and creating a positive learning environment.",
    icon: GraduationCap,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-emerald-400">
            My Journey
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Work <span className="text-emerald-400">Experience</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            My professional experience and the skills I&apos;ve developed
            throughout my career.
          </p>
        </div>

        {/* Experience Card */}
        <div className="mx-auto max-w-3xl">
          {experienceData.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <div
                key={index}
                className="flex gap-5 rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-emerald-400/50 sm:p-8"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Icon size={28} />
                </div>

                <div>
                  <span className="text-sm font-medium text-emerald-400">
                    {experience.duration}
                  </span>

                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {experience.position}
                  </h3>

                  <p className="mt-2 flex items-center gap-2 text-slate-300">
                    <BriefcaseBusiness size={17} />
                    {experience.company}
                  </p>

                  <p className="mt-4 leading-7 text-slate-400">
                    {experience.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
