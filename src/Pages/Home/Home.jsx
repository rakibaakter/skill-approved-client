import { Helmet } from "react-helmet-async";
import HomeBanner from "./HomeComponent/HomeBanner";
import JobCategories from "./HomeComponent/JobCategories/JobCategories";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Skill-Approved</title>
      </Helmet>
      <HomeBanner />
      <JobCategories />
    </div>
  );
};

export default Home;
