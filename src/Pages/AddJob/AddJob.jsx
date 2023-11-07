import PageBanner from "../../Component/PageBanner/PageBanner";
import PrimaryButton from "../../Component/PrimaryButton/PrimaryButton";
import useCategoryData from "../../Hooks/useCategoryData";

const AddJob = () => {
  const categories = useCategoryData();
  console.log(categories);

  return (
    <div>
      <PageBanner> New Job Requirement</PageBanner>
      <div className="card w-full lg:w-2/3 py-10 mx-auto px-2 md:px-10 lg:px-20 ">
        <form className="card-body space-y-4">
          {/* email */}
          <div className="form-control">
            <label className="input-group ">
              <span className="bg-cyan-700 text-white md:w-1/6">Email</span>
              <input
                type="email"
                placeholder="info@site.com"
                name="email"
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
                placeholder="job title"
                name="jobTitle"
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
                  name="date"
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
                <select className="select select-info w-full max-w-xs">
                  <option disabled selected>
                    Select Category
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
                  placeholder="$"
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
                  placeholder="$"
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
                className="textarea textarea-bordered border-cyan-700 w-full lg:w-1/3"
                placeholder="Job Description"
              ></textarea>
            </label>
          </div>
          <div className="form-control mt-6">
            <PrimaryButton>
              <input type="submit" value="Add Job" />
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
