import { AppRoutes } from "~/router";
import { Modal } from "./components/Modal";
import { useModal } from "./store";

export default function App() {
  const { modalState } = useModal();
  return (
    <>
      <AppRoutes />
      {modalState && <Modal />}
    </>
  );
}
