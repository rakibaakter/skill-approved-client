import { Helmet } from "react-helmet-async";
import HomeBanner from "./HomeComponent/HomeBanner";
import JobCategories from "./HomeComponent/JobCategories/JobCategories";
import FAQ from "./HomeComponent/FAQ";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Skill-Approved</title>
      </Helmet>
      <HomeBanner />
      <JobCategories />
      <FAQ />
    </div>
  );
};

export default Home;
