import React from "react";
import me from '../assets/me.jpg'
import ishola from '../assets/ishola.jpg'

function AboutPage() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">

        {/* Hero */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            About <span className="text-yellow-300">BlogManager</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Your go-to platform for learning, building, and staying up to date
            with modern web development practices.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white/10 p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-yellow-300">
            Our Mission
          </h2>
          <p className="text-white/90 leading-relaxed">
            At BlogManager, we believe that learning web development should be
            hands-on, accessible, and inspiring. Our mission is to break down
            complex concepts into practical guides that empower developers to
            create real-world projects with confidence.
          </p>
        </div>

        {/* Topics Covered */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            What We <span className="text-yellow-300">Cover</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["Frontend", "React.js", "UI/UX", "Testing"].map((topic) => (
              <div
                key={topic}
                className="bg-white/10 p-6 rounded-xl shadow-md text-center hover:bg-yellow-300 hover:text-black transition"
              >
                <h3 className="text-xl font-semibold mb-2">{topic}</h3>
                <p className="text-sm">
                  Articles, guides, and tips to level up your {topic} skills.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet the Author */}
        <div className="bg-white/10 p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-yellow-300 text-center">
            Meet the Author
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={me}
              alt="Author"
              className="w-40 h-40 rounded-full object-cover border-4 border-yellow-300"
            />
            <div>
              <h3 className="text-2xl font-bold text-center md:text-left">Daniel Udeh</h3>
              <p className="text-white/70 mb-4">Frontend Developer & Founder</p>
              <p className="text-white/90 leading-relaxed">
                Daniel is a creative and detail-oriented frontend developer with a passion for building clean, user-friendly, and interactive web applications. With expertise in React, JavaScript, and modern UI/UX practices, he focuses on crafting digital experiences that balance functionality with design. As the founder of BlogManager, Daniel drives the vision of making web development knowledge more accessible through practical projects and insightful guides.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-yellow-300">Team</span>
          </h2>
          <div className="flex justify-center">
            <div className="bg-white/10 p-6 rounded-xl shadow-md text-center max-w-xs hover:scale-105 transition">
              <img
                src={ishola}
                alt="Team Member"
                className="w-32 h-32 rounded-full object-cover border-4 border-yellow-300 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Gbolahun Ishola</h3>
              <p className="text-sm text-white/70 mb-3">Frontend Developer</p>
              <p className="text-white/80 text-sm leading-relaxed">
                Ishola is a talented frontend developer with a strong eye for design and detail. He enjoys turning ideas into responsive, interactive, and visually appealing web applications. Skilled in HTML, CSS, JavaScript, and React, Ishola contributes to building modern, user-focused solutions at BlogManager. 
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            Why <span className="text-yellow-300">Choose Us?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Practical Projects", desc: "Learn by building real-world apps." },
              { title: "Modern Tech", desc: "Stay updated with the latest tools." },
              { title: "Community Driven", desc: "Content shaped by developer needs." },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white/10 p-6 rounded-xl shadow-md hover:bg-yellow-300 hover:text-black transition"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Explore Our <span className="text-yellow-300">Posts?</span>
          </h2>
          <a
            href="/posts"
            className="px-8 py-4 bg-yellow-300 text-black font-semibold rounded-lg shadow-md hover:bg-white hover:text-indigo-600 transition"
          >
            Browse Posts
          </a>
        </div>

      </div>
    </section>
  );
}

export default AboutPage;
