import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Github, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-10 border-t border-t-2 border-white/50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">BlogManager</h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            Sharing knowledge, tutorials, and tips on web development. Stay inspired, stay learning.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <Link to="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>
              <Link to="/posts" className="hover:text-white transition">Posts</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">About</Link>
            </li>
            
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex gap-4">
            <a href="https://web.facebook.com/profile.php?id=61573114588186" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Facebook size={20} />
            </a>
            <a href="https://www.linkedin.com/in/daniel-udeh-a03971350/" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/diddy0077" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Github size={20} />
            </a>
            <a href="mailto:danieludeh007@yahoo.com" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} BlogManager. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
