import { CategoryTab } from "./CategoryTab";
import { ActivityGenerator } from "./ActivityGenerator";
import { CATEGORIES } from "./constants/CATEGORIES";
import { Header } from "./Header";
import { useContext } from "react";
import { ActivityDisplay } from "./ActivityDisplay";
import { ActivityGeneratorContext } from "./contexts/ActivityGeneratorContext";

export default function App() {

  const { selectedCategoryName, setSelectedCategoryName, setCurrentActivity } = useContext(ActivityGeneratorContext);

  const categorySelected = (categoryName: string) => {
    setSelectedCategoryName(categoryName);
    setCurrentActivity("");
  };

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          marginBlock: "20px",
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
      <ActivityGenerator />
      <ActivityDisplay />
    </>
  );
}
