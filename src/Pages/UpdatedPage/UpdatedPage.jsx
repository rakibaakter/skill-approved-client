import { useLoaderData } from "react-router-dom";
import PageBanner from "../../Component/PageBanner/PageBanner";
import PrimaryButton from "../../Component/PrimaryButton/PrimaryButton";
import useAuthInfoHook from "../../Hooks/useAuthInfoHook";
import useCategoryData from "../../Hooks/useCategoryData";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const UpdatedPage = () => {
  const { user } = useAuthInfoHook();
  const categories = useCategoryData();
  const selectedJob = useLoaderData();

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

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const posterEmail = form.email.value;
    const title = form.title.value;
    const deadline = form.deadline.value;
    const category = form.category.value;
    const minSalary = form.minSalary.value;
    const maxSalary = form.maxSalary.value;
    const description = form.description.value;

    const updatedJob = {
      posterEmail,
      title,
      deadline,
      category,
      minSalary,
      maxSalary,
      description,
    };
    console.log(updatedJob);

    axios
      .put(`http://localhost:5000/postedJob/${_id}`, updatedJob)
      .then((res) => {
        console.log(res);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Your job has been updated",
            showConfirmButton: true,
          });
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

  return (
    <div>
      <Helmet>
        <title>Skill-Approved|update-job</title>
      </Helmet>
      <PageBanner> Update Job</PageBanner>
      <div className="card w-full lg:w-2/3 py-10 mx-auto px-2 md:px-10 lg:px-20 ">
        <form onSubmit={handleUpdate} className="card-body space-y-4">
          {/* email */}
          <div className="form-control">
            <label className="input-group ">
              <span className="bg-cyan-700 text-white md:w-1/6">Email</span>
              <input
                type="email"
                defaultValue={posterEmail}
                name="email"
                disabled
                className="input input-bordered border-cyan-700 w-full"
              />
            </label>
          </div>
          {/* job title */}
          <div className="form-control">
            <label className="input-group ">
              <span className="bg-cyan-700 text-white md:w-1/6">Job Title</span>
              <input
                type="text"
                defaultValue={title}
                name="title"
                className="input input-bordered border-cyan-700 w-full"
              />
            </label>
          </div>
          {/* deadline and category */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-2">
            {/* deadline */}
            <div className="form-control md:w-1/2">
              <label className="input-group ">
                <span className="bg-cyan-700 text-white md:w-1/3">
                  Deadline
                </span>
                <input
                  type="date"
                  name="deadline"
                  defaultValue={deadline}
                  className="input input-bordered border-cyan-700 w-full"
                />
              </label>
            </div>
            {/* category */}
            <div className="form-control md:w-1/2">
              <label className="input-group ">
                <span className="bg-cyan-700 text-white md:w-1/3">
                  Category
                </span>
                <select
                  name="category"
                  defaultValue={category}
                  className="select select-info w-full max-w-xs"
                >
                  <option disabled selected>
                    {category}
                  </option>
                  {categories.map((category) => (
                    <option key={category.id}>{category.category_name}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          {/* Minimum  and Maximum salary */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-2">
            {/* minimum */}
            <div className="form-control md:w-1/2">
              <label className="input-group ">
                <span className="bg-cyan-700 text-white w-2/3">Min Salary</span>
                <input
                  type="text"
                  name="minSalary"
                  defaultValue={minSalary}
                  className="input input-bordered border-cyan-700 w-full"
                />
              </label>
            </div>
            {/* maximum */}
            <div className="form-control md:w-1/2">
              <label className="input-group ">
                <span className="bg-cyan-700 text-white w-2/3">Max Salary</span>
                <input
                  type="text"
                  name="maxSalary"
                  defaultValue={maxSalary}
                  className="input input-bordered border-cyan-700 w-full"
                />
              </label>
            </div>
          </div>
          {/* job Description */}
          <div className="form-control">
            <label className="input-group ">
              <span className="bg-cyan-700 text-white md:w-1/6">
                Job Description
              </span>
              <textarea
                name="description"
                placeholder="job description"
                className="textarea textarea-bordered border-cyan-700 w-full "
              ></textarea>
            </label>
          </div>
          <div className="form-control mt-6">
            <PrimaryButton>
              <input type="submit" value="Update Now" />
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatedPage;
