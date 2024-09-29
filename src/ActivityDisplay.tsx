import { useContext } from "react";
import { ActivityGeneratorContext } from "./contexts/ActivityGeneratorContext";

export function ActivityDisplay() {
  const { ActivitiesList } = useContext(ActivityGeneratorContext);

  const getRandomInt = () => {
    return Math.floor(Math.random() * ActivitiesList.length);
  };

  const randomNumber = getRandomInt();

  return (
    <>
      {ActivitiesList.length > 0 && (
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
          <div key={ActivitiesList[randomNumber].key}>
          {ActivitiesList[randomNumber].activity}
          </div>
        </div>
      )}
    </>
  );
}
