import { CategoryTab } from "./CategoryTab";
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
    <div style={{ padding: "20px" }}>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBlock: "20px",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {Object.keys(CATEGORIES).map((category) => (
          <CategoryTab
            key={crypto.randomUUID()}
            categoryName={category}
            isSelected={selectedCategoryName === category}
            onClick={() => categorySelected(category)}
          />
        ))}
      </div>
      <div className={`${displayActivityText ? 'lg:flex lg:justify-between lg:center lg:m-auto lg:w-1/2 w-full' : 'w-full'}`}>
        <ActivityGenerator />
        <ActivityDisplay />
      </div>
    </div>
  );
}
