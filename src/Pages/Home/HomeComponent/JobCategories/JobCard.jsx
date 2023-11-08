import { Link } from "react-router-dom";
import PrimaryButton from "../../../../Component/PrimaryButton/PrimaryButton";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    posterEmail,
    deadline,
    category,
    minSalary,
    maxSalary,
    description,
  } = job;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body text-left">
        <h2 className="card-title lg:text-2xl font-bold">{title}</h2>
        <span className="flex flex-col md:flex-row md:gap-8 md:text-xl font-medium md:my-1">
          <h4>Deadline : {deadline}</h4>
          <h3>
            Salary Range : ${minSalary} - ${maxSalary}
          </h3>
        </span>
        <p>{description.substring(0, 400)}...</p>
        <div className="card-actions ">
          <Link to={`/job-details/${_id}`}>
            <PrimaryButton>Bid Now</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
