import { createRoot } from "react-dom/client";
import "./index.css";
import { RootComponent } from "~/components/RootComponent";

createRoot(document.getElementById("root")!).render(<RootComponent />);
