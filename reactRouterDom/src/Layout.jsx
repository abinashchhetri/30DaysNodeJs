import { Outlet } from "react-router-dom";
import { Footer, Header } from "./routes";
export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
