import { Outlet } from "react-router-dom";
import { Content } from "~/components/Content";
import { Footer } from "~/components/Footer";
import { Navbar } from "~/components/Navbar";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </div>
  );
}
