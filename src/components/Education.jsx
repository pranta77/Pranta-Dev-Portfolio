import { GraduationCap, BookOpen } from "lucide-react";

const educationData = [
  {
    degree: "Diploma in Computer Science",
    institution: "Daffodil Institute Of IT",
    subject: "Computer Science",
    duration: "2016 - 2020",
    description:
      "Completed a Diploma in Computer Science, gaining academic knowledge of computer fundamentals, programming, and software development.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Marine Academy School and College",
    subject: "Business studies",
    duration: "2016 ",
    description: "Completed my Secondary School Certificate.",
  },
];

const Education = () => {
  return (
    <section id="education" className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-emerald-400">
            Academic Background
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            My <span className="text-emerald-400">Education</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            My educational journey and academic background.
          </p>
        </div>

        {/* Education Cards */}
        <div className="mx-auto max-w-3xl space-y-6">
          {educationData.map((education, index) => (
            <div
              key={index}
              className="flex gap-5 rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-emerald-400/50 sm:p-8"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <GraduationCap size={30} />
              </div>

              <div>
                <span className="text-sm font-medium text-emerald-400">
                  {education.duration}
                </span>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  {education.degree}
                </h3>

                <p className="mt-2 font-medium text-slate-300">
                  {education.institution}
                </p>

                <p className="mt-1 flex items-center gap-2 text-sm text-slate-400">
                  <BookOpen size={16} />
                  {education.subject}
                </p>

                <p className="mt-4 leading-7 text-slate-400">
                  {education.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
