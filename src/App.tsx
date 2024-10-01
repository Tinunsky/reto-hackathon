import { CategoryButton } from "./CategoryButton";
import { ActivityGenerator } from "./ActivityGenerator";
import { CATEGORIES } from "./constants/CATEGORIES";
import { Header } from "./Header";
import { useContext } from "react";
import { ActivityDisplay } from "./ActivityDisplay";
import { ActivityGeneratorContext } from "./contexts/ActivityGeneratorContext";

export default function App() {
  const {
    selectedCategoryName,
    setSelectedCategoryName,
    setCurrentActivity,
    displayActivityText,
  } = useContext(ActivityGeneratorContext);

  const categorySelected = (categoryName: string) => {
    setSelectedCategoryName(categoryName);
    setCurrentActivity("");
  };

  return (
    <div className="main-wrapper">
      <Header />
      <div className="category-tab">
        {Object.keys(CATEGORIES).map((category) => (
          <CategoryButton
            key={crypto.randomUUID()}
            categoryName={category}
            isSelected={selectedCategoryName === category}
            onClick={() => categorySelected(category)}
          />
        ))}
      </div>
      <div
        className={`${
          displayActivityText
            ? "lg:flex lg:justify-between lg:center lg:m-auto lg:w-1/2 w-full"
            : "w-full"
        }`}
      >
        <ActivityGenerator />
        <ActivityDisplay />
      </div>
    </div>
  );
}
