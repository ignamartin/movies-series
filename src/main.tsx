import {
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import App from "./App.tsx";
import { queryClient } from "./config/queryClient.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary onReset={reset} fallback={<Navigate to="/error" />}>
              <App />
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
        <Toaster richColors position="bottom-center" closeButton />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
