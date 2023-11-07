import bannerImg from "../../../assets/banner.jpg";
import PrimaryButton from "../../../Component/PrimaryButton/PrimaryButton";

const HomeBanner = () => {
  return (
    <div className="hero  ">
      <div className="hero-content flex-col md:flex-row-reverse px-4 md:px-10 ">
        <img src={bannerImg} className="max-w-[280px] lg:max-w-md " />
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold text-cyan-900">
            Skill Approved
          </h1>
          <div className="space-y-6 py-6">
            <h2 className="text-2xl text-cyan-700 font-medium">
              Are You looking for a job?
            </h2>
            <p className="text-xl text-cyan-900">
              Skill Approved is here to reach your skill . We here providing
              multi-categories job of multiple company so that you can prove
              your skill to the job marketplace.
            </p>
          </div>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
