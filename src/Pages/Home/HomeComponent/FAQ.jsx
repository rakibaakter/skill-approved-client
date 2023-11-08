import question from "../../../assets/question.png";

const FAQ = () => {
  return (
    <div
      className="hero min-h-[70vh] my-10"
      style={{
        backgroundImage: `url(${question})`,
      }}
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="text-white">
        <h2 className="my-8 text-center text-3xl font-bold text-cyan-700">
          Frequently Ask Questions?
        </h2>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              How do I create an account on Skill Approved?
            </div>
            <div className="collapse-content">
              <p>Walk users through the registration process.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              What safety measures are in place to protect my personal
              information and transactions?
            </div>
            <div className="collapse-content">
              <p>
                The security measures and privacy protections on your platform.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              How can I provide feedback or suggestions to improve [Your
              Marketplace Name]
            </div>
            <div className="collapse-content">
              <p>
                Users to share their thoughts and ideas for enhancement is
                working feature now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
