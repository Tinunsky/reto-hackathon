import { CategoryTab } from "./CategoryTab";
import { ActivityGenerator } from "./ActivityGenerator";
import { CATEGORIES } from "./constants/CATEGORIES";
import { Header } from "./Header";
import { useState } from "react";
import { ActivityDisplay } from "./ActivityDisplay";

export default function App() {

  const [selectedCategoryName, setSelectedCategoryName] = useState(""); 


  const categorySelected = (categoryName: string) => {
    setSelectedCategoryName(categoryName);
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
        {CATEGORIES.map((category) => (
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
