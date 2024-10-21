import { useModal } from "~/store/useModal.ts";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import { Modal } from "~/components/Modal";
import { queryClient } from "~/config";
import App from "~/App.tsx";

export default function RootComponent() {
  const { modalState } = useModal();

  return (
    <StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary
                onReset={reset}
                fallback={<Navigate to="/error" />}
              >
                <App />
                {modalState && <Modal />}
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
          <Toaster richColors position="bottom-center" closeButton />
        </QueryClientProvider>
      </BrowserRouter>
    </StrictMode>
  );
}
