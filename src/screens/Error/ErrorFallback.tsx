import {
  ERROR_404,
  ERROR_BUTTON_CONTACT_TEXT,
  ERROR_BUTTON_TEXT,
  ERROR_TEXT,
  ERROR_TITLE,
} from "~/constants";

export default function ErrorFallback() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="grid place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 h-screen">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">{ERROR_404}</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            {ERROR_TITLE}
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            {ERROR_TEXT}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {ERROR_BUTTON_TEXT}
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              {ERROR_BUTTON_CONTACT_TEXT} <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
