import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareShareNodes,
  FaSquareXTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";
import {
  FOOTER_NEWSLETTER,
  FOOTER_PLACEHOLDER,
  FOOTER_SUBSCRIBE,
  FOOTER_SUBTITLE,
} from "~/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <p className="text-2xl font-semibold tracking-tight text-white pb-2">
              {FOOTER_NEWSLETTER}
            </p>
            <p className="text-xs font-light text-white">{FOOTER_SUBTITLE}</p>
            <p className="text-xs font-light text-white"></p>

            <form className="flex flex-col mx-auto mt-4 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="email"
                className="px-4 py-2 border rounded-md bg-gray-900 text-gray-300 border-gray-600 focus:border-blue-500 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-500"
                placeholder={FOOTER_PLACEHOLDER}
                required
              />

              <button
                type="submit"
                className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                {FOOTER_SUBSCRIBE}
              </button>
            </form>
          </div>

          <div>
            <p className="font-semibold text-white">Navegación rápida</p>

            <nav className="flex flex-col items-start mt-5 space-y-2 text-gray-300">
              <a
                href="#"
                className="transition-colors duration-300 hover:underline hover:text-blue-400"
              >
                Inicio
              </a>
              <a
                href="#"
                className="transition-colors duration-300 hover:underline hover:text-blue-400"
              >
                Películas
              </a>
              <a
                href="#"
                className="transition-colors duration-300 hover:underline hover:text-blue-400"
              >
                Series
              </a>
              <a
                href="#"
                className="transition-colors duration-300 hover:underline hover:text-blue-400"
              >
                Favoritos
              </a>
            </nav>
          </div>

          <div>
            <p className="font-semibold text-white">Información</p>

            <div className="flex flex-col items-start mt-5 space-y-2 text-gray-300">
              <a
                href="#"
                className="transition-colors duration-300 hover:text-blue-400 hover:underline"
              >
                FAQ (Preguntas Frecuentes)
              </a>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-blue-400 hover:underline"
              >
                Acerca de Nosotros
              </a>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-blue-400 hover:underline"
              >
                Términos y Condiciones
              </a>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-blue-400 hover:underline"
              >
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

        <div className="flex items-center justify-between">
          <a href="#">
            <img
              className="w-64"
              src="/images/logo.png"
              alt="movies and series logo"
            />
          </a>

          <div className="flex">
            <a
              href="#"
              className="mx-2 transition-colors duration-300 text-gray-300 hover:text-blue-400"
              aria-label="Instagram"
            >
              <FaSquareInstagram size={26} />
            </a>

            <a
              href="#"
              className="mx-2 transition-colors duration-300 text-gray-300 hover:text-blue-400"
              aria-label="Facebook"
            >
              <FaSquareFacebook size={26} />
            </a>

            <a
              href="#"
              className="mx-2 transition-colors duration-300 text-gray-300 hover:text-blue-400"
              aria-label="XTwitter"
            >
              <FaSquareXTwitter size={26} />
            </a>

            <a
              href="#"
              className="mx-2 transition-colors duration-300 text-gray-300 hover:text-blue-400"
              aria-label="Youtube"
            >
              <FaSquareYoutube size={26} />
            </a>

            <a
              href="#"
              className="mx-2 transition-colors duration-300 text-gray-300 hover:text-blue-400"
              aria-label="Share"
            >
              <FaSquareShareNodes size={26} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
