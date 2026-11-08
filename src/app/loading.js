const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <div className="text-center">
        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-600 border-t-emerald-400"></div>

        <h2 className="mt-5 text-xl font-semibold text-white">
          Loading...
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Please wait while the page loads.
        </p>
      </div>
    </div>
  );
};

export default Loading;