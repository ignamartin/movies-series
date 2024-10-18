import { Link } from "react-router-dom";
import { navigation } from "~/config/navigation";

export default function Navbar() {
  return (
    <div className="relative w-full z-10 flex items-center justify-between h-14 text-white bg-gray-900 border-none">
      <div className="flex items-center justify-start pl-4 bg-gray-900 border-none">
        <img className="w-7 h-7 mr-2 rounded-md overflow-hidden" src="/images/logo-s23.png" />
        <span>Movies & Series</span>
      </div>
      <nav className="flex justify-end items-center h-14 bg-gray-900 header-right">
        <ul className="flex items-center">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link to={item.href}>{item.name}</Link>
              <div className="block w-px h-6 mx-3 bg-gray-400"></div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
