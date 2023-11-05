import tick from "../../assets/tick.gif";

const Logo = () => {
  return (
    <div className="flex items-center md:text-xl font-semibold">
      <img src={tick} alt="" className="h-12 w-12 md:h-16 md:w-16" />
      <span className="md:mb-2">
        Skill
        <span className="md:text-3xl font-bold text-green-400 "> A</span>pproved
      </span>
    </div>
  );
};

export default Logo;
