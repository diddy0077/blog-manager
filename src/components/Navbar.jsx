import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for mobile toggle

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/posts", label: "Posts" },
    { path: "/about", label: "About" },
    { path: "/add-post", label: "Add Post" },
  ];

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-white tracking-wide hover:opacity-90 transition"
        >
          BlogManager
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md transition ${
                    isActive
                      ? "bg-white text-indigo-600 font-semibold shadow"
                      : "text-white hover:bg-white/20"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md ${
                      isActive
                        ? "bg-indigo-600 text-white font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
