export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <h1 className="text-5xl font-bold mb-2">
        Hi, I'm Izaak
      </h1>
      <p className="text-xl mb-4">
        I build solutions with Next.js, React, and Node.js
      </p>
      <a
        href="#projects"
        className="px-4 py-2 text-lg bg-blue-600 text-white rounded-full hover:bg-blue-700"
      >
        View My Projects
      </a>
    </section>
  );
};
