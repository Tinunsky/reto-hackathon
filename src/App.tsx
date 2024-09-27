import { CategoryTab } from "./CategoryTab";
import { CATEGORIES } from "./constants/CATEGORIES";
import { Header } from "./Header";
import { useState } from "react";

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
          marginBlock: "10px",
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
    </>
  );
}
