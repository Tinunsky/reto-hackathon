import { useContext } from "react";
import greenSmile from "./assets/green_smile.png";
import { ActivityGeneratorContext } from "./contexts/ActivityGeneratorContext";

export function ActivityGenerator() {
  const { getActivities, selectedCategoryName } = useContext(
    ActivityGeneratorContext
  );

  const handleGenerate = () => {
    if (selectedCategoryName) {
      getActivities(selectedCategoryName);
    } else {
      alert("Please select a category before generating an activity.");
    }
  };

  return (
    <div className="activity-generator-wrapper">
      <div className="green-smile">
        <img src={greenSmile} alt="greenSmile" />
      </div>
      <div className="background-painted">
        <div className="text-for-activity-generator">
          TROBA ALGUNA <br /> COSA A FER
        </div>
        <div className="button-activity-generator" onClick={handleGenerate}>
          Generar
        </div>
      </div>
    </div>
  );
}
