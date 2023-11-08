import { useLoaderData, useNavigate } from "react-router-dom";
import PageBanner from "../../Component/PageBanner/PageBanner";
import PrimaryButton from "../../Component/PrimaryButton/PrimaryButton";
import useAuthInfoHook from "../../Hooks/useAuthInfoHook";
import PageTitle from "../../Component/PageTitle/PageTitle";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
  const { user } = useAuthInfoHook();
  const selectedJob = useLoaderData();
  const [isRedirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const {
    _id,
    title,
    posterEmail,
    deadline,
    category,
    minSalary,
    maxSalary,
    description,
  } = selectedJob;

  const descriptionArray = description.split(":");
  // console.log(descriptionArray);

  const handleBid = (event) => {
    event.preventDefault();
    const form = event.target;
    const bidSalary = form.bidSalary.value;
    const bidDeadline = form.bidDeadline.value;

    const bidRequest = {
      title,
      userEmail: user.email,
      posterEmail,
      bidSalary,
      bidDeadline,
      status: "pending",
    };
    console.log(bidRequest);

    axios
      .post("http://localhost:5000/bid", bidRequest)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Your job has been bidded",
            showConfirmButton: true,
          });
          setRedirect(true);
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      });
  };

  if (isRedirect) {
    navigate("/my-bids");
  }

  return (
    <div>
      <Helmet>
        <title>Skill-Approved|job-details</title>
      </Helmet>
      <PageBanner>Job Details</PageBanner>
      <div className="card  bg-base-100 shadow-xl py-4 px-2 text-center md:px-10 lg:px-20">
        <div className="card-body text-left">
          <h2 className="card-title lg:text-2xl font-bold text-cyan-700">
            {title}
          </h2>
          <h3 className="font-medium">Category : {category}</h3>
          <h4 className="lg:text-xl font-medium">Deadline : {deadline}</h4>
          <h3 className="lg:text-xl font-medium">
            Salary Range : ${minSalary} - ${maxSalary}
          </h3>
          {descriptionArray.map((describe, index) => (
            <li key={index} className="card-body p-1 bg-base-100 shadow-xl ">
              {describe}
            </li>
          ))}
        </div>
      </div>
      <div className="card w-full lg:w-2/3 py-10 mx-auto px-2 md:px-10 lg:px-20 ">
        <form onSubmit={handleBid} className="card-body space-y-4">
          <PageTitle>Place Your Bid</PageTitle>
          {/*  salary and deadline */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-2">
            {/* deadline */}
            <div className="form-control md:w-1/2">
              <label className="input-group ">
                <span className="bg-cyan-700 text-white md:w-1/3">Salary</span>
                <input
                  type="text"
                  placeholder="$ bid salay"
                  name="bidSalary"
                  required
                  className="input input-bordered border-cyan-700 w-full"
                />
              </label>
            </div>
            {/* Deadline */}
            <div className="form-control md:w-1/2">
              <label className="input-group ">
                <span className="bg-cyan-700 text-white w-2/3">DeadLine</span>
                <input
                  type="date"
                  name="bidDeadline"
                  required
                  className="input input-bordered border-cyan-700 w-full"
                />
              </label>
            </div>
          </div>
          {/* user email, poster email */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-2">
            {/* user */}
            <div className="form-control md:w-1/2">
              <label className="input-group ">
                <span className="bg-cyan-700 text-white md:w-1/3">User</span>
                <input
                  type="email"
                  defaultValue={user.email}
                  name="userEmail"
                  disabled
                  className="input input-bordered border-cyan-700 w-full"
                />
              </label>
            </div>
            {/* poster */}
            <div className="form-control md:w-1/2">
              <label className="input-group ">
                <span className="bg-cyan-700 text-white md:w-1/3">Buyer</span>
                <input
                  type="email"
                  defaultValue={posterEmail}
                  name="buyerEmail"
                  disabled
                  className="input input-bordered border-cyan-700 w-full"
                />
              </label>
            </div>
          </div>

          <div className="form-control mt-6">
            {user.email === posterEmail ? (
              <input
                type="submit"
                value="Bid Now (disable)"
                disabled
                className="btn"
              ></input>
            ) : (
              <PrimaryButton>
                <input type="submit" value="Bid Now"></input>
              </PrimaryButton>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobDetails;
