import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "SR-Asia Website Redesign",
      description:
        "A fully re-designed and developed corporate website using Next.js, Express.js, and MongoDB. Conducted UX research, created Figma prototypes, and optimized performance and accessibility.",
      image: "/assets/sr-asia.png", // If you have a banner. Otherwise use a stock image.
      tags: ["Next.js", "Express.js", "MongoDB", "Figma", "UX Research"],
      github: "https://github.com/HarshJajaniya/sr-asia",
      demo: "https://sr-asia.org",
      color: "bg-blue-500",
    },

    {
      title: "GetMeAChai – Donation Platform",
      description:
        "A full-stack donation app built using Next.js 15 (App Router), MongoDB, Razorpay Checkout, and NextAuth.js. Supports secure payments, user profiles, and donation tracking.",
      image: "/assets/getmeachai.png",
      tags: ["Next.js", "MongoDB", "Razorpay", "NextAuth.js", "Tailwind"],
      github: "https://github.com/HarshJajaniya/get_me_a_chai",
      demo: "https://get-me-a-chai-eta-ten.vercel.app/",
      color: "bg-yellow-400",
    },

    {
      title: "AI Chat Interface – My App",
      description:
        "A modern conversational AI chat UI built with Next.js and TypeScript. Features real-time API communication, a clean responsive layout, and a mobile-first interface.",
      image: "/assets/my-app.png",
      tags: ["Next.js", "TypeScript", "Tailwind", "API Integration"],
      github: "https://github.com/HarshJajaniya/my-app",
      demo: "https://my-app-hy3v.vercel.app/",
      color: "bg-red-500",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 relative overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-500 to-yellow-400 opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-black mb-4 uppercase tracking-wider border-b-8 border-red-500 inline-block pb-2">
            My Work
          </h2>
          <h3 className="text-black max-w-3xl mx-auto">FEATURED PROJECTS</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white border-4 border-black overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 group"
            >
              <div className="relative h-48 overflow-hidden border-b-4 border-black">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 ${project.color} opacity-0 group-hover:opacity-30 transition-opacity mix-blend-multiply`}
                ></div>
              </div>

              <div className="p-6">
                <div
                  className={`${project.color} border-2 border-black px-3 py-1 inline-block mb-4`}
                >
                  <h4 className="text-black uppercase tracking-wide">
                    {project.title}
                  </h4>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 border-2 border-black text-black uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border-2 border-black text-black hover:bg-black hover:text-white transition-all uppercase tracking-wide"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all uppercase tracking-wide"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
