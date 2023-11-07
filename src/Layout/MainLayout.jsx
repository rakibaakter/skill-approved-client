import { Outlet } from "react-router-dom";
import MenuBar from "../Component/MenuBar/MenuBar";
import FooterContainer from "../Component/Footer/FooterContainer";

const MainLayout = () => {
  return (
    <div>
      <MenuBar />
      <div className="min-h-[80vh] pt-16 md:pt-20">
        <Outlet />
      </div>
      <FooterContainer />
    </div>
  );
};

export default MainLayout;
