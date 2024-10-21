import { Link } from "react-router-dom";
import { navigation } from "~/config/navigation";

export default function Navbar() {
  return (
    <header className="bg-gray-900">
      <div className="container px-6 py-4 h-14 mx-auto flex items-center justify-between text-white">
        <div className="flex items-center justify-start pl-4">
          <img
            className="w-7 h-7 mr-2 rounded-md overflow-hidden"
            src="/images/logo-s23.png"
          />
          <span>Movies & Series</span>
        </div>
        <nav className="flex justify-end items-center h-14 bg-gray-900 header-right">
          <ul className="flex items-center">
            {navigation.map((item) => (
              <>
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="transition-colors duration-300 hover:underline hover:text-blue-400"
                  >
                    {item.name}
                  </Link>
                </li>
                {navigation.length - 1 !== navigation.indexOf(item) && (
                  <div className="block w-px h-6 mx-3 bg-gray-400"></div>
                )}
              </>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
