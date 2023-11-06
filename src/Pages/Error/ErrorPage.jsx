import { Link } from "react-router-dom";
import PrimaryButton from "../../Component/PrimaryButton/PrimaryButton";
import error404 from "../../assets/404.jpg";

const ErrorPage = () => {
  return (
    <div
      id="error-page"
      className="text-center min-h-screen flex items-center justify-center"
    >
      <div className="space-y-8">
        <h1 className="font-bold text-3xl text-cyan-500">Oops!</h1>

        <div className="w-2/3 lg:w-1/3 mx-auto pb-10">
          <img src={error404} alt="error" />
        </div>
        <Link to="/">
          <PrimaryButton>Go Home</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
