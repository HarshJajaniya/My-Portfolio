import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID!,
        process.env.EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          alert("Something went wrong. Please try again.");
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Brutalist Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 border-4 border-black opacity-20 transform rotate-45"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 border-4 border-black opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-black mb-4 uppercase tracking-wider border-b-8 border-yellow-400 inline-block pb-2">
            Get In Touch
          </h2>
          <h3 className="text-black max-w-3xl mx-auto">LET'S WORK TOGETHER</h3>
          <p className="text-gray-800 max-w-2xl mx-auto mt-4 leading-relaxed">
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {/* Email */}
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-500 border-4 border-black flex items-center justify-center text-white flex-shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <div className="text-black uppercase tracking-wide mb-2">
                    Email
                  </div>
                  <a
                    href="mailto:ajjujajaniyal@gmail.com"
                    className="text-gray-700 hover:text-black hover:underline transition-all"
                  >
                    ajjujajaniyal@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-yellow-400 border-4 border-black flex items-center justify-center text-black flex-shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <div className="text-black uppercase tracking-wide mb-2">
                    Phone
                  </div>
                  <a
                    href="tel:+919045797274"
                    className="text-gray-700 hover:text-black hover:underline transition-all"
                  >
                    +(91) 9045797274
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-red-500 border-4 border-black flex items-center justify-center text-white flex-shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <div className="text-black uppercase tracking-wide mb-2">
                    Location
                  </div>
                  <p className="text-gray-700">Indirapuram, Ghaziabad, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-black mb-2 uppercase tracking-wide"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all bg-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-black mb-2 uppercase tracking-wide"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all bg-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-black mb-2 uppercase tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all resize-none bg-white"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-black text-white border-4 border-black hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>

        <div className="text-center mt-16 pt-8 border-t-4 border-black">
          <p className="text-black uppercase tracking-wider">
            © 2025 YOUR NAME. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </section>
  );
}
