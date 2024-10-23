import { useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { navigation } from "~/config";
import { NAVBAR_TITLE } from "~/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="bg-gray-900">
      <div className="container px-6 py-4 h-14 mx-auto flex items-center justify-between text-white">
        <div className="flex items-center justify-start pl-4">
          <img
            className="w-7 h-7 mr-2 rounded-md overflow-hidden"
            src="/images/logo-s23.png"
          />
          <span>{NAVBAR_TITLE}</span>
        </div>
        <nav className="flex justify-end items-center h-14 bg-gray-900 header-right">
          <button onClick={toggleMenu} className="sm:hidden p-2">
            {isOpen ? <FaX size={20} /> : <FaBars size={20} />}
          </button>
          <ul className="hidden sm:flex items-center">
            {navigation.map((item) => (
              <>
                <li key={`mobile-${item.id}`}>
                  <Link
                    to={item.href}
                    className="mx-3 transition-colors duration-300 hover:underline hover:text-blue-400"
                    aria-label={`Ir a ${item.name}`}
                  >
                    {item.name}
                  </Link>
                </li>
              </>
            ))}
          </ul>
          {isOpen && (
            <div className="sm:hidden absolute top-14 right-0 bg-gray-800 w-full shadow-lg z-50">
              <ul className="flex flex-col p-4">
                {navigation.map((item) => (
                  <li key={item.id} className="py-2 pl-2">
                    <Link
                      to={item.href}
                      aria-label={`Ir a ${item.name}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
