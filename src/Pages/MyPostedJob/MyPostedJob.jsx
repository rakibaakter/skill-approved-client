import { useEffect, useState } from "react";
import useAuthInfoHook from "../../Hooks/useAuthInfoHook";
import axios from "axios";
import PageBanner from "../../Component/PageBanner/PageBanner";
import { Link } from "react-router-dom";
import PrimaryButton from "../../Component/PrimaryButton/PrimaryButton";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyPostedJob = () => {
  const { user } = useAuthInfoHook();
  const [myPostedJob, setMyPostedJob] = useState([]);

  useEffect(() => {
    axios
      .get(
        `       https://online-marketplace-server-j666mjnnd-rakibaakter.vercel.app/postedJob?posterEmail=${user.email}`
      )
      .then((res) => {
        setMyPostedJob(res.data);
      });
  }, [user]);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `       https://online-marketplace-server-j666mjnnd-rakibaakter.vercel.app/postedJob/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remainig = myPostedJob.filter(
                (selectedJob) => selectedJob._id !== id
              );
              setMyPostedJob(remainig);

              Swal.fire("Deleted!", "Your job has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Skill-Approved|posted-job</title>
      </Helmet>
      <PageBanner>My Posted Jobs</PageBanner>
      <div className="grid lg:grid-cols-2 gap-4">
        {myPostedJob.map((job) => (
          <div
            key={job._id}
            className="card  bg-base-100 shadow-xl py-4 px-2 text-center md:px-10 lg:px-20"
          >
            <div className="card-body text-left">
              <h2 className="card-title lg:text-2xl font-bold text-cyan-700">
                {job.title}
              </h2>
              <h3 className="font-medium">Category : {job.category}</h3>
              <h4 className="lg:text-xl font-medium">
                Deadline : {job.deadline}
              </h4>
              <h3 className="lg:text-xl font-medium">
                Salary Range : ${job.minSalary} - ${job.maxSalary}
              </h3>
              <p>{job.description.substring(0, 800)}</p>
              <div className="card-actions justify-start">
                <Link to={`/update-job/${job._id}`}>
                  <PrimaryButton>Update</PrimaryButton>
                </Link>
                <Link>
                  <button
                    onClick={() => handleDelete(job._id)}
                    className="btn btn-error"
                  >
                    Delete
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPostedJob;
