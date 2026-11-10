
import React, { useState } from "react";
import {
  Mail,
  Send,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  Phone
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


import emailjs from "@emailjs/browser";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    console.log("Email sent successfully:", response);

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  } catch (error) {
    console.error("Complete EmailJS Error:", error);
    console.error("Error message:", error?.message);
    console.error("Error status:", error?.status);
    console.error("Error text:", error?.text);

    alert("Unable to send message. Check the browser console.");
  }
};



  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080b16] text-white px-5 sm:px-8 py-20">

      {/* Background Glow Effects */}
      <div className="absolute top-20 left-[-100px] w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      <div className="absolute bottom-20 right-[-100px] w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none animate-pulse" />

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in-up">

          <span className="inline-flex items-center gap-2 text-blue-400 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-sm mb-5 hover:bg-blue-500/20 transition-all duration-300">
            <MessageCircle size={16} className="animate-float" />
            GET IN TOUCH
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Connect
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            Have an opportunity, project idea, or just want to connect?
            Feel free to reach out. I'd love to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Contact Information */}
          <div className="space-y-7">

            {/* Introduction */}
            <div
              style={{ animationDelay: "150ms" }}
              className="animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
            >
              <h2 className="text-2xl font-bold mb-4">
                Let's work together
              </h2>

              <p className="text-gray-400 leading-8">
                I am interested in software development opportunities,
                internships, collaborative projects, and connecting with
                other developers.
              </p>
            </div>

            {/* Email Card */}
            <a
              href="mailto:sampanayak987@gmail.com"
              style={{ animationDelay: "300ms" }}
              className="group flex items-center gap-5 p-5 rounded-2xl bg-[#101729] border border-white/10 hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-[0_10px_35px_rgba(37,99,235,0.12)] transition-all duration-500 animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                <Mail className="text-blue-400" size={23} />
              </div>

              <div className="min-w-0">
                <p className="text-gray-500 text-sm">Email Me</p>
                <p className="text-white font-medium break-all">
                  sampanayak987@gmail.com
                </p>
              </div>

              <ArrowUpRight className="ml-auto shrink-0 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </a>

            {/* Location Card */}
            <div
              style={{ animationDelay: "450ms" }}
              className="group flex items-center gap-5 p-5 rounded-2xl bg-[#101729] border border-white/10 hover:border-purple-500/50 hover:-translate-y-2 hover:shadow-[0_10px_35px_rgba(147,51,234,0.12)] transition-all duration-500 animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300">
                <MapPin className="text-purple-400" size={23} />
              </div>

              <div>
                <p className="text-gray-500 text-sm">Location</p>
                <p className="text-white font-medium">
                  West Bengal, India
                </p>
              </div>
            </div>

            {/* Social Media & Contact */}
            <div
              style={{ animationDelay: "600ms" }}
              className="animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
            >
              <h3 className="font-semibold mb-4">Find me on</h3>

              <div className="flex flex-wrap gap-4">

                {/* GitHub */}
                <a
                  href="https://github.com/Sampa321"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group w-12 h-12 rounded-xl bg-[#101729] border border-white/10 flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400 hover:-translate-y-2 transition-all duration-300"
                >
                  <FaGithub size={22} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/sampa-nayak-5486a235a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group w-12 h-12 rounded-xl bg-[#101729] border border-white/10 flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400 hover:-translate-y-2 transition-all duration-300"
                >
                  <FaLinkedin size={22} />
                </a>

                {/* Email */}
                <a
                  href="mailto:sampanayak987@gmail.com"
                  aria-label="Email"
                  className="group w-12 h-12 rounded-xl bg-[#101729] border border-white/10 flex items-center justify-center hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400 hover:-translate-y-2 transition-all duration-300"
                >
                  <Mail size={22} />
                </a>

                {/* Phone */}
                <a
                  href="tel:+918653032972"
                  aria-label="Phone"
                  className="group w-12 h-12 rounded-xl bg-[#101729] border border-white/10 flex items-center justify-center hover:border-green-500/50 hover:bg-green-500/10 hover:text-green-400 hover:-translate-y-2 transition-all duration-300"
                >
                  <Phone size={22} />
                </a>

              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            style={{ animationDelay: "300ms" }}
            className="relative bg-[#101729] border border-white/10 rounded-2xl p-7 sm:p-9 space-y-5 shadow-xl hover:border-blue-500/30 transition-all duration-500 animate-slide-in-right"
          >

            {/* Form Heading */}
            <div className="mb-6">
              <span className="text-blue-400 text-sm font-medium tracking-wider">
                HAVE A QUESTION?
              </span>

              <h2 className="text-2xl font-bold mt-2">
                Send Me a Message
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                I'll be happy to hear from you.
              </p>
            </div>

            {/* Name */}
            <div className="group">
              <label
                htmlFor="contact-name"
                className="block text-sm text-gray-300 mb-2"
              >
                Your Name
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Sampa Nayak"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#080b16] border border-white/10 text-white placeholder-gray-600 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div className="group">
              <label
                htmlFor="contact-email"
                className="block text-sm text-gray-300 mb-2"
              >
                Your Email
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#080b16] border border-white/10 text-white placeholder-gray-600 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300"
              />
            </div>

            {/* Subject */}
            <div className="group">
              <label
                htmlFor="contact-subject"
                className="block text-sm text-gray-300 mb-2"
              >
                Subject
              </label>

              <input
                id="contact-subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project subject..."
                required
                className="w-full px-4 py-3 rounded-xl bg-[#080b16] border border-white/10 text-white placeholder-gray-600 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300"
              />
            </div>

            {/* Message */}
            <div className="group">
              <label
                htmlFor="contact-message"
                className="block text-sm text-gray-300 mb-2"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                rows="5"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#080b16] border border-white/10 text-white placeholder-gray-600 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300"
            >
              Send Message

              <Send
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
