import { Link, useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../Component/PrimaryButton/PrimaryButton";
import loginImg from "../../assets/login.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import PageTitle from "../../Component/PageTitle/PageTitle";
import useAuthInfoHook from "../../Hooks/useAuthInfoHook";
import { ToastContainer, toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [isShow, setIsShow] = useState(false);
  const { createUserByEmail } = useAuthInfoHook();
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photoURL.value;
    console.log(name, email, password, photo);

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters or longer", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password should have at least one upper case characters.", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      return;
    } else if (!/[!@#$%&*_]/.test(password)) {
      toast.error(
        "Password should have at least one special characters (!, @, #,$,%,&,*,_).",
        {
          position: toast.POSITION.BOTTOM_CENTER,
        }
      );
      return;
    }

    createUserByEmail(email, password)
      .then((result) => {
        // update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        toast.success("Registration succeed !", {
          position: toast.POSITION.BOTTOM_CENTER,
        });

        // navigate after register
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      });
  };

  return (
    <div className="hero pt-10">
      <div className="hero-content flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card w-full md:w-1/2   md:shadow-2xl bg-base-100 -mt-16 md:mt-10 card-body ">
          <div>
            <PageTitle>Sign Up Now!</PageTitle>

            <form onSubmit={handleRegister}>
              <ToastContainer />
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
                  <span className="label-text">Photo URL ( optional )</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  name="photoURL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <PrimaryButton>
                  <input type="submit" value="Sign Up" />
                </PrimaryButton>
              </div>
            </form>

            <p className="text-center my-4">
              {`Already have account?`}
              <Link to="/login" className="text-blue-600">
                {" "}
                Sign In
              </Link>{" "}
              Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
