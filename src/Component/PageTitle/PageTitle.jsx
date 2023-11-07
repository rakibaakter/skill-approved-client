import logo from "../../assets/tick.gif";

const PageTitle = ({ children }) => {
  return (
    <div className="flex items-center justify-center">
      <img src={logo} alt="" className="h-16" />
      <h1 className="text-3xl text-cyan-700 text-center font-bold">
        {children}
      </h1>
    </div>
  );
};

export default PageTitle;
