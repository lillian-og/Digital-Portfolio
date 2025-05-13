import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Lillian Jensen
          </h1>

          <p className="text-pink-100 text-lg mb-8 max-w-lg mx-auto">
            I’m a full-stack developer who loves crafting clean, fun, and
            scalable web applications. My goal is to build solutions that offer
            both exceptional performance and a delightful user experience, along
            with a pleasing design.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-pink-300 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-pink-300/50 text-pink-300 py-3 px-6 rounded font-medium transition-all duration-200
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
