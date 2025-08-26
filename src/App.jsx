import React from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useRef } from "react";
import myPhoto from "./assets/3G7A0252.jpg";



export default function App() {
  const formRef = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
    emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  formRef.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
)
    .then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully ✅");
      },
      (error) => {
        console.log(error.text);
        alert("Oops! Something went wrong ❌");
      }
    );
};

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-500">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow z-50 transition-colors">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-400">
            Fraol Deresse
          </h1>
          <ul className="flex space-x-6 font-medium">
            <li><a href="#home" className="hover:text-red-600 dark:hover:text-red-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-red-600 dark:hover:text-red-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-red-600 dark:hover:text-red-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-red-600 dark:hover:text-red-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-red-600 dark:hover:text-red-400 transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-12 px-6 
        bg-gradient-to-br from-red-50 via-white to-red-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors"
      >
        {/* Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
            <span className="items-center">Hello</span> <br /> I'm{" "}
            <span className="text-red-600 dark:text-red-400">Fraol Deresse</span>
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mb-8 text-gray-700 dark:text-gray-300">
            A passionate Web Developer who loves building modern, user-friendly, and responsive applications.
          </p>
          <a
            href="#projects"
            className="px-8 py-3 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 transition"
          >
            🚀 View My Work
          </a>
        </motion.div>

        {/* Photo */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={myPhoto}
            alt="Fraol Deresse"
            className="w-100 h-100 object-cover rounded-full shadow-xl border-4 border-white dark:border-gray-700 hover:scale-105 transition"></img>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 flex bg-gradient-to-br from-red-50 via-white to-red-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12 text-center text-red-600 dark:text-red-400">
            About Me
          </h3>
          <p className="text-lg text-gray-200 leading-relaxed text-justify">
      Hi, I’m <span className="font-semibold">Fraol Deresse Ayano</span>, a Computer Science and Engineering
      graduate (2024/25) from <span className="font-semibold">Adama Science and Technology University</span>.
      I am a motivated and curious individual who enjoys continuous learning, problem-solving,
      and turning ideas into practical solutions.
      <br /><br />
      Throughout my academic journey and personal projects, I’ve built skills in
      <span className="font-semibold"> web development, database management, and software engineering</span>.
      I enjoy working with modern technologies like React, TailwindCSS, Node.js, and MongoDB to create
      responsive and user-friendly applications. I’ve also worked on different projects ranging from
      web applications to system proposals that aim to solve real-world problems.
      <br /><br />
      Beyond coding, I value teamwork, documentation, and clear communication. During my internship,
      I focused on documentation tasks, which helped me strengthen my organizational and detail-oriented
      skills. I believe that combining strong technical knowledge with effective collaboration is key
      to building impactful solutions.
      <br /><br />
      I am passionate about technology, innovation, and continuous growth. I thrive on challenges and
      see every project as an opportunity to learn something new while contributing meaningfully. My
      ultimate goal is to apply my knowledge and creativity to make a positive impact through technology.
    </p>
        </div>
      </motion.section>

      {/* Skills Section */}
<motion.section
  id="skills"
  className="py-20 bg-white dark:bg-gray-900 transition-colors"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h3 className="text-3xl font-bold mb-12 text-red-600 dark:text-red-400">
      Skills
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {["React", "Tailwind", "Node.js", "Express", "MongoDB", "Git", "JavaScript", "Python"].map(
        (skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-red-400 shadow-lg transition"
          >
            {skill}
          </motion.div>
        )
      )}
    </div>
  </div>
</motion.section>


      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 bg-gradient-to-br from-red-50 via-white to-red-100 
        dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-red-600 dark:text-red-400">
            Projects
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Portfolio Website",
                desc: "A personal portfolio built with React & TailwindCSS.",
                img: "Screenshot 2025-08-25 130516.png",
                demo: "#",
                github: "https://github.com/FiraDere",
              },
              {
                title: "E-commerce App",
                desc: "A full-stack MERN application with authentication & payments.",
                img: "images.jpg",
                demo: "#",
                github: "https://github.com/FiraDere",
              },
              {
                title: "Voting System",
                desc: "Blockchain-based secure voting system for organizations.",
                img: "voting7.webp",
                demo: "#",
                github: "https://github.com/FiraDere",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl 
                overflow-hidden transform hover:-translate-y-2 transition"
              >
                {/* Image + Hover Overlay */}
                <div className="relative group">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 
                  group-hover:opacity-100 flex items-center justify-center gap-4 transition">
                    
                    <a
                      href={project.github}
                      target="_blank"
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
<motion.section
  id="contact"
  className="py-20 bg-white dark:bg-gray-900 transition-colors"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h3 className="text-3xl font-bold mb-6 text-red-600 dark:text-red-400">
      Contact Me
    </h3>

    {/* Contact Information */}
    <div className="mb-12 space-y-4 text-gray-700 dark:text-gray-300">
  <p>
    📍 <span className="font-semibold">Location:</span> Addis Ababa, Ethiopia
  </p>
  <p>
    ✉️ <span className="font-semibold">Email:</span>{" "}
    <a href="mailto:fraolderesse11@gmail.com" className="hover:text-blue-400">
      fraolderesse11@gmail.com
    </a>
  </p>
  <p>
    📱 <span className="font-semibold">Phone:</span>{" "}
    <a href="tel:+251949293304" className="hover:text-blue-400">
      +251 949 293 304
    </a>
  </p>
</div>


    {/* Contact Form */}
    <form ref={formRef} onSubmit={sendEmail} className="space-y-6 max-w-xl mx-auto">
  <input
    type="text"
    name="user_name"
    placeholder="Your Name"
    className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
    required
  />
  <input
    type="email"
    name="user_email"
    placeholder="Your Email"
    className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
    required
  />
  <textarea
    name="message"
    placeholder="Your Message"
    className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
    rows="4"
    required
  ></textarea>
  <button
    type="submit"
    className="px-8 py-3 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 transition"
  >
    Send Message
  </button>
</form>


    {/* Social Links */}
    <div className="mt-8 flex justify-center space-x-6">
      <a href="https://github.com/fraolderesse" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
        GitHub
      </a>
      <a href="https://linkedin.com/in/fraolderesse" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
        LinkedIn
      </a>
      <a href="mailto:fraolderesseayano@gmail.com" className="hover:text-red-600">
        Email
      </a>
    </div>
  </div>
</motion.section>



      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-center text-gray-400 dark:bg-black dark:text-gray-500">
        <p>© {new Date().getFullYear()} Fraol Deresse. All rights reserved.</p>
      </footer>
    </div>
  );
}
