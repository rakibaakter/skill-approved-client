import { Tab, TabList, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useCategoryData from "../../../../Hooks/useCategoryData";
import { useState } from "react";
import { Link } from "react-router-dom";

const JobCategories = () => {
  const categories = useCategoryData();
  const [selectedCategory, setSelectedCategory] = useState("Web Development");
  console.log(selectedCategory);

  const handleShowCategoryData = (name) => {
    setSelectedCategory(name);
  };

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
      </Tabs>
    </div>
  );
};

export default JobCategories;
