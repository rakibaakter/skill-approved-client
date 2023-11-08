import { useLoaderData } from "react-router-dom";
import PageBanner from "../../Component/PageBanner/PageBanner";

const JobDetails = () => {
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

  const descriptionArray = description.split(":");
  console.log(descriptionArray);

  return (
    <div>
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
          <div className="card-actions ">
            {/* <Link to={`/job-details/${_id}`}>
            <PrimaryButton>Bid Now</PrimaryButton>
          </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
