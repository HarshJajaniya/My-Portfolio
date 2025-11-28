import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Code2, Palette, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Material Design Elevation Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500 opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-black mb-4 uppercase tracking-wider border-b-8 border-yellow-400 inline-block pb-2">
              About Me
            </h2>
            <h3 className="text-black mb-6">BUILDING DIGITAL EXPERIENCES</h3>
            <p className="text-gray-800 mb-4 leading-relaxed">
              I'm a passionate web developer with expertise in creating modern,
              scalable web applications. With a strong foundation in both
              frontend and backend technologies, I bring ideas to life through
              clean code and intuitive design.
            </p>
            <p className="text-gray-800 mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="w-16 h-16 bg-blue-500 border-4 border-black flex items-center justify-center text-white mb-4">
                  <Code2 size={32} />
                </div>
                <div className="text-black uppercase tracking-wide mb-2">
                  Clean Code
                </div>
                <div className="text-gray-700">
                  Writing maintainable and efficient code
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="w-16 h-16 bg-yellow-400 border-4 border-black flex items-center justify-center text-black mb-4">
                  <Palette size={32} />
                </div>
                <div className="text-black uppercase tracking-wide mb-2">
                  Modern Design
                </div>
                <div className="text-gray-700">
                  Creating beautiful user interfaces
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="w-16 h-16 bg-red-500 border-4 border-black flex items-center justify-center text-white mb-4">
                  <Zap size={32} />
                </div>
                <div className="text-black uppercase tracking-wide mb-2">
                  Performance
                </div>
                <div className="text-gray-700">
                  Optimizing for speed and efficiency
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square border-8 border-black overflow-hidden shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] transition-all">
              <ImageWithFallback
                src="/assets/profile1.png"
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-yellow-400 border-4 border-black -z-10"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500 border-4 border-black -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
