// import banner2 from "../../assets/banner2.jpg";

const History = () => {
  return (
    <div className="hero ">
      <div className="hero-content items-center flex-col lg:flex-row">
        {/* <img src={banner2} className="max-w-[280px]" /> */}
        <div>
          <h1 className="text-center text-3xl text-cyan-700 font-bold my-10">
            Our Mission and Vision
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card  bg-cyan-700 text-white">
              <div className="card-body">
                <h2 className="card-title">Our Mission</h2>
                <p>
                  our mission is to revolutionize the way individuals connect
                  with employment opportunities, fostering a platform where job
                  seekers find their ideal positions, and employers discover
                  exceptional talent seamlessly. We are dedicated to bridging
                  the gap between job seekers and employers by providing a
                  user-friendly, dynamic marketplace where opportunities are
                  abundant, and the right match is just a click away.
                </p>
              </div>
            </div>
            <div className="card border border-cyan-700 text-cyan-700">
              <div className="card-body">
                <h2 className="card-title">Our Vision </h2>
                <p>
                  At Skill Approved, our vision is to create a world where every
                  individual career aspirations are within reach, and where
                  employers find the perfect match for their teams effortlessly.
                  We aim to be the foremost platform that Empowers Aspirations:
                  We envision a world where job seekers have the tools and
                  support they need to transform their career dreams into
                  reality, no matter their background or experience. Fosters
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
