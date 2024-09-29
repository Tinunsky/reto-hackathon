import { useContext } from "react";
import greenSmile from "./assets/green_smile.png";
import { ActivityGeneratorContext } from "./contexts/ActivityGeneratorContext";

export function ActivityGenerator() {
  const { getActivities } = useContext(ActivityGeneratorContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        alignItems: "center",
        marginTop: "80px",
        position: "relative",
      }}
    >
      <div
        style={{
          zIndex: 1,
        }}
      >
        <img src={greenSmile} alt="greenSmile" />
      </div>
      <div
        style={{
          backgroundColor: "#eaf5f9",
          width: "200px",
          height: "150px",
          borderRadius: "25px",
          position: "relative",
          top: "-20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div style={{ fontWeight: "800", textAlign: "center" }}>
          TROBA ALGUNA <br /> COSA A FER
        </div>
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "15px",
            width: "fit-content",
            padding: "10px 20px",
            cursor: "pointer",
          }}
          onClick={() => getActivities()}
        >
          Generar
        </div>
      </div>
    </div>
  );
}
