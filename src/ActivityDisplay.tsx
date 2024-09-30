import { useContext } from "react";
import { ActivityGeneratorContext } from "./contexts/ActivityGeneratorContext";

export function ActivityDisplay() {
  const { currentActivity } = useContext(ActivityGeneratorContext);

  return (
    <>
      {currentActivity && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "250px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <h2>Activitat:</h2>
          <div>{currentActivity}</div>
        </div>
      )}
    </>
  );
}
