import { Outlet } from "react-router-dom";
import MenuBar from "../Component/MenuBar/MenuBar";

const MainLayout = () => {
  return (
    <div>
      <MenuBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
