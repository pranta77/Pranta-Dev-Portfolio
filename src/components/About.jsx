import { Code2, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-emerald-400">
            Get To Know Me
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            About <span className="text-emerald-400">Me</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            A little introduction about my journey, passion, and what motivates
            me as a developer.
          </p>
        </div>

        {/* About Content */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Introduction */}
          <div>
            <h3 className="mb-5 text-2xl font-semibold text-white">
              I&apos;m Pranta, a passionate Web Developer.
            </h3>

            <p className="mb-5 leading-8 text-slate-400">
              My programming journey started with curiosity about how websites
              work and how digital experiences are created. That curiosity
              gradually turned into a passion for web development.
            </p>

            <p className="mb-5 leading-8 text-slate-400">
              I enjoy building responsive and user-friendly applications using
              modern technologies like React, Next.js, JavaScript, Node.js,
              Express.js, and MongoDB. I love solving problems, exploring new
              technologies, and writing clean, maintainable code.
            </p>

            <p className="leading-8 text-slate-400">
              Outside programming, I enjoy exploring technology, learning new
              things, and spending time on activities that keep me creative and
              motivated. My goal is to become a skilled developer and contribute
              to meaningful real-world projects.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid gap-5">
            <div className="flex gap-5 rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-emerald-400/50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <Code2 size={26} />
              </div>

              <div>
                <h4 className="mb-2 text-lg font-semibold text-white">
                  Clean Code
                </h4>
                <p className="text-sm leading-7 text-slate-400">
                  I enjoy writing clean, organized, and maintainable code while
                  following good development practices.
                </p>
              </div>
            </div>

            <div className="flex gap-5 rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-emerald-400/50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <Lightbulb size={26} />
              </div>

              <div>
                <h4 className="mb-2 text-lg font-semibold text-white">
                  Problem Solving
                </h4>
                <p className="text-sm leading-7 text-slate-400">
                  I love exploring challenges and finding practical solutions
                  through logical thinking.
                </p>
              </div>
            </div>

            <div className="flex gap-5 rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-emerald-400/50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <Rocket size={26} />
              </div>

              <div>
                <h4 className="mb-2 text-lg font-semibold text-white">
                  Continuous Learning
                </h4>
                <p className="text-sm leading-7 text-slate-400">
                  I believe in continuous improvement and always enjoy learning
                  new tools and technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
