import { Link } from "react-router-dom";
import PrimaryButton from "../../Component/PrimaryButton/PrimaryButton";
import loginImg from "../../assets/login.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="hero pt-10">
      <div className="hero-content flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card w-full md:w-1/2   md:shadow-2xl bg-base-100 -mt-16 md:mt-10 card-body ">
          <div>
            <h1 className="text-3xl text-cyan-700 text-center font-bold">
              Login now!
            </h1>
            <button className="my-8 w-full btn flex justify-center gap-2 capitalize text-cyan-700">
              <span className="text-2xl">
                <FcGoogle />
              </span>
              <span>Continue With Google</span>
            </button>
            <div className="divider">Or continue with useremail</div>
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={isShow ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered "
                  required
                />
                <button
                  onClick={() => setIsShow(!isShow)}
                  className="absolute top-2/3 right-4"
                >
                  {isShow ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="form-control mt-6">
                <PrimaryButton>
                  <input type="submit" value="Login" />
                </PrimaryButton>
              </div>
            </form>

            <p className="text-center my-4">
              {`Don't have any account?`}
              <Link to="/sign-up" className="text-blue-600">
                {" "}
                SignUp
              </Link>{" "}
              Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;