import { Link } from "react-router-dom";
import PrimaryButton from "../../Component/PrimaryButton/PrimaryButton";
import loginImg from "../../assets/login.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import PageTitle from "../../Component/PageTitle/PageTitle";

const Register = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="hero pt-10">
      <div className="hero-content flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card w-full md:w-1/2   md:shadow-2xl bg-base-100 -mt-16 md:mt-10 card-body ">
          <div>
            <PageTitle>Sign Up Now!</PageTitle>

            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <PrimaryButton>
                  <input type="submit" value="Login" />
                </PrimaryButton>
              </div>
            </form>

            <p className="text-center my-4">
              {`Don't have any account?`}
              <Link to="/register" className="text-blue-600">
                {" "}
                SignUp Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
