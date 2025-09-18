import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import App from "@/App";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
