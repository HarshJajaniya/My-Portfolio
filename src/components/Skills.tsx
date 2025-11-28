export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "bg-blue-500",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Next.js (App Router)",
        "TypeScript",
        "Vue.js (Beginner)",
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design (Flexbox, Grid)",
        "Chart.js",
      ],
    },
    {
      title: "Backend Development",
      color: "bg-yellow-400",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "RESTful APIs",
        "NextAuth.js (GitHub, Google)",
        "Razorpay Integration",
      ],
    },
    {
      title: "Full-Stack & Tools",
      color: "bg-red-500",
      skills: [
        "Git",
        "GitHub",
        "GitLab",
        "Postman",
        "Version Control",
        "Project Documentation",
      ],
    },
    {
      title: "UI/UX Design",
      color: "bg-green-500",
      skills: [
        "Figma (Wireframing, Prototyping)",
        "UX Research",
        "Design Systems",
        "Information Architecture",
      ],
    },
    {
      title: "Creative Tools",
      color: "bg-purple-500",
      skills: ["Photoshop", "After Effects"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Background layer */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-500 to-yellow-400 opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-black mb-4 uppercase tracking-wider border-b-8 border-red-500 inline-block pb-2">
            My Skills
          </h2>
          <h3 className="text-black max-w-3xl mx-auto">
            TECHNOLOGIES & EXPERTISE
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1"
            >
              <div
                className={`${category.color} border-2 border-black px-3 py-1 inline-block mb-4`}
              >
                <h4 className="text-black uppercase tracking-wide">
                  {category.title}
                </h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 border-2 border-black text-black uppercase tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
