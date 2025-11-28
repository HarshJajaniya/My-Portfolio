import { Github, Linkedin, Mail, MoveDown } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      {/* Brutalist Geometric Shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-400 border-4 border-black transform rotate-12"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-500 border-4 border-black"></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-red-500 border-4 border-black transform -rotate-45"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="space-y-8">
          <div className="inline-block px-6 py-3 bg-black text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <span className="uppercase tracking-widest">
              Available for work
            </span>
          </div>

          <h1 className="text-black max-w-4xl">
            HI, I'M{" "}
            <span className="bg-yellow-400 px-4 border-4 border-black inline-block transform -rotate-1">
              HARSH JAJANIYA
            </span>
            <br />
            <span className="block mt-4">FULL-STACK</span>
            <span className="bg-blue-500 px-4 border-4 border-black inline-block transform rotate-1">
              WEB DEVELOPER
            </span>
          </h1>

          <p className="text-black max-w-2xl border-l-8 border-black pl-6 py-4">
            I CRAFT BEAUTIFUL, RESPONSIVE WEBSITES AND WEB APPLICATIONS WITH
            MODERN TECHNOLOGIES. PASSIONATE ABOUT CREATING SEAMLESS USER
            EXPERIENCES AND CLEAN, MAINTAINABLE CODE.
          </p>

          <div className="flex items-center gap-4 pt-4 flex-wrap">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-black text-white border-4 border-black hover:bg-white hover:text-black transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-4 border-black text-black hover:bg-black hover:text-white transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex items-center gap-4 pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 border-4 border-black bg-white hover:bg-black hover:text-white transition-all flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 border-4 border-black bg-white hover:bg-black hover:text-white transition-all flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:ajjujajaniya@example.com"
              className="w-14 h-14 border-4 border-black bg-white hover:bg-black hover:text-white transition-all flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-black hover:scale-110 transition-transform animate-bounce border-4 border-black bg-yellow-400 p-3"
      >
        <MoveDown size={32} />
      </button>
    </section>
  );
}
