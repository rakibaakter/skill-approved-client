import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useCategoryData from "../../../../Hooks/useCategoryData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobCard from "./JobCard";
import axios from "axios";

const JobCategories = () => {
  const categories = useCategoryData();
  const [selectedCategory, setSelectedCategory] = useState("Web-Development");
  console.log(selectedCategory);
  const [categoryJob, setCategoryJob] = useState([]);

  const handleShowCategoryData = (name) => {
    setSelectedCategory(name);
  };
  useEffect(() => {
    fetch(
      `      https://online-marketplace-server-j666mjnnd-rakibaakter.vercel.app/postedJob?category=${selectedCategory}`
    )
      .then((res) => res.json())
      .then((data) => setCategoryJob(data));

    // axios
    //   .get(`       https://online-marketplace-server-j666mjnnd-rakibaakter.vercel.app/postedJob?category=${selectedCategory}`)
    //   .then((res) => setCategoryJob(res.data));
  }, [selectedCategory]);

  return (
    <div className="py-16 px-2 text-center md:px-10 lg:px-20">
      <h1 className="text-3xl font-bold text-cyan-900 my-8">Skill Approved</h1>
      <Tabs>
        <TabList>
          {categories.map((category) => (
            <Tab key={category.id}>
              <Link
                onClick={() => handleShowCategoryData(category.category_name)}
              >
                {category.category_name}
              </Link>
            </Tab>
          ))}
        </TabList>
        {categories.map((category) => (
          <TabPanel key={category.id}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {categoryJob.map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default JobCategories;
