import { Helmet } from "react-helmet-async";
import HomeBanner from "./HomeComponent/HomeBanner";
import JobCategories from "./HomeComponent/JobCategories/JobCategories";
import FAQ from "./HomeComponent/FAQ";
import History from "./History";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Skill-Approved</title>
      </Helmet>
      <HomeBanner />
      <History />
      <JobCategories />
      <FAQ />
    </div>
  );
};

export default Home;
