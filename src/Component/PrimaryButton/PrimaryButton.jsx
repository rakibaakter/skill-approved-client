const PrimaryButton = ({ children }) => {
  return (
    <button className="btn bg-cyan-700 text-white hover:border-cyan-700 hover:text-cyan-700 ">
      {children}
    </button>
  );
};

export default PrimaryButton;
