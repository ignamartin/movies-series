import {
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "@tanstack/react-query";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import App from "~/App.tsx";
import { Loading } from "~/components/Loading";
import { queryClient } from "~/config";
import { ErrorFallback } from "~/screens/Error";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary onReset={reset} fallback={<ErrorFallback />}>
              <Suspense fallback={<Loading />}>
                <App />
              </Suspense>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
        <Toaster richColors position="bottom-center" closeButton />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
