import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "~/components/layout";
import { Loading } from "~/components/Loading";

const Home = lazy(() => import("~/screens/Home/Home"));
const Movies = lazy(() => import("~/screens/Movies/Movies"));
const Series = lazy(() => import("~/screens/Series/Series"));
const Description = lazy(() => import("~/screens/Description/Description"));
const Favourites = lazy(() => import("~/screens/Favourites/Favourites"));
const ErrorFallback = lazy(() => import("~/screens/Error/ErrorFallback"));

export default function AppRoutes() {
  return (
    <Suspense fallback={Loading()}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
          <Route path="description/:id" element={<Description />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="error" element={<ErrorFallback />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
