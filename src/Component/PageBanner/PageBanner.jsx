import pageBanner from "../../assets/pageBanner.png";

const PageBanner = ({ children }) => {
  return (
    <div
      className="min-h-[40vh] "
      style={{
        backgroundImage: `url(${pageBanner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="px-2 flex items-center h-[40vh] md:px-10 lg:px-20 ">
        <h1 className="text-3xl md:text-5xl text-cyan-900 font-bold ">
          {children}
        </h1>
      </div>
    </div>
  );
};

export default PageBanner;
