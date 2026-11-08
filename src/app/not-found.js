import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-900 px-5">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-emerald-400">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-white">Page Not Found!</h2>

        <p className="mt-4 text-slate-400">
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
