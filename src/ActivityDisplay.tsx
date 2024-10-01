import { useContext } from "react";
import { ActivityGeneratorContext } from "./contexts/ActivityGeneratorContext";

export function ActivityDisplay() {
  const { currentActivity } = useContext(ActivityGeneratorContext);

  return (
    <>
      {currentActivity && (
        <div className="activity-display-wrapper">
          <h2>Activitat:</h2>
          <div>{currentActivity}</div>
        </div>
      )}
    </>
  );
}
