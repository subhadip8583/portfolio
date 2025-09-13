import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send,Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);

  const SERVICE_ID = "service_r581mtt";
  const TEMPLATE_ID = "template_36j590g";
  const PUBLIC_KEY = "7eILGrMKLiskxExAb";

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setSending(false);
        formRef.current.reset();
        toast.success("✅ Message sent successfully!");
      })
      .catch((error) => {
        console.error("Email error:", error);
        setSending(false);
        toast.error("❌ Failed to send message. Try again later.");
      });
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-950 to-black text-white"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] text-4xl md:text-4xl font-extrabold">
          Contact Me
        </h2>
        <p className="mt-3 text-gray-300 text-lg">
          Get in touch with me for any job role, Projects, or just a chat!
        </p>
      </div>

      {/* Form */}
      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto grid gap-6 bg-gradient-to-br from-indigo-800/70 to-blue-800/60 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-4 rounded-lg bg-white/10 placeholder-gray-300 text-white border border-gray-600 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition shadow-inner"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-4 rounded-lg bg-white/10 placeholder-gray-300 text-white border border-gray-600 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition shadow-inner"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="p-4 rounded-lg bg-white/10 placeholder-gray-300 text-white border border-gray-600 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition shadow-inner"
          required
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          disabled={sending}
          className={`relative flex items-center justify-center px-6 py-3 text-white font-medium rounded-lg shadow-lg transition-transform duration-300 overflow-hidden
            ${sending ? "bg-gray-600 cursor-wait" : "bg-gradient-to-r from-pink-500 to-indigo-600 hover:scale-105"}`}
          aria-busy={sending}
        >
          <span>{sending ? "Sending..." : "Send Message"}</span>
          <motion.span
            className="ml-2"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Send size={18} />
          </motion.span>
        </button>
      </motion.form>

      {/* Contact Info ... (rest same as before) */}
      {/* Contact Info with Icons */}
<motion.div
  className="mt-10 text-center text-gray-300 flex flex-col items-center gap-2"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  {/* Email */}
  <p className="flex items-center gap-2">
    <Mail size={18} className="text-cyan-400" />
    <a
      href="mailto:subhadip8583@gmail.com"
      className="text-cyan-400 hover:underline"
    >
      subhadip8583@gmail.com
    </a>
  </p>

  {/* Phone */}
  <p className="flex items-center gap-2">
    <Phone size={18} className="text-cyan-400" />
    <a
      href="tel:+918348613425"
      className="text-cyan-400 hover:underline"
    >
      +91 8348613425
    </a>
  </p>

  {/* Social Links */}
  <p className="flex items-center gap-4 mt-2">
    <a
      href="https://linkedin.com/in/subhadipadhikary8583"
      className="flex items-center gap-1 text-cyan-400 hover:underline"
    >
      <Linkedin size={18} /> LinkedIn
    </a>
    <a
      href="https://github.com/subhadip8583"
      className="flex items-center gap-1 text-cyan-400 hover:underline"
    >
      <Github size={18} /> GitHub
    </a>
  </p>
</motion.div>

    </section>
  );
}
