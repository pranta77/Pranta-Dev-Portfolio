import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-widest text-emerald-400">
            Get In Touch
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Contact Me
          </h2>
          <p className="mt-4 text-slate-400">
            Have a project or opportunity in mind? Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-emerald-400" size={24} />
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <p className="text-slate-400">devpranta0@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-emerald-400" size={24} />
              <div>
                <h3 className="font-semibold text-white">Phone</h3>
                <p className="text-slate-400">01882362777</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-emerald-400" size={24} />
              <div>
                <h3 className="font-semibold text-white">Location</h3>
                <p className="text-slate-400">Bangladesh</p>
              </div>
            </div>
          </div>

          <form className="space-y-5 rounded-2xl border border-white/10 bg-slate-800/50 p-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-400"
            />

            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
