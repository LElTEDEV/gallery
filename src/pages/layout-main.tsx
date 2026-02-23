import { Outlet } from "react-router";
import { MainHeader } from "../components/main-header";

export function LayoutMain() {
  return (
    <>
      <MainHeader />
      <Outlet />;
    </>
  );
}
