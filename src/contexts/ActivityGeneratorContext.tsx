import { createContext, ReactNode, useState } from "react";
import { CATEGORIES } from "../constants/CATEGORIES";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

const defaultActivityGeneratorContext = {
  getActivities: (() => {}) as (id: string) => void,
  selectedCategoryName: "",
  setSelectedCategoryName: (() => {}) as SetState<string>,
  currentActivity: "",
  setCurrentActivity: (() => {}) as SetState<string>,
  displayActivityText: false,
  setDisplayActivityText: (() => {}) as SetState<boolean>,
};

export const ActivityGeneratorContext = createContext<
  typeof defaultActivityGeneratorContext
>(defaultActivityGeneratorContext);

export const ActivityGeneratorProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
  const [currentActivity, setCurrentActivity] = useState("");
  const [displayActivityText, setDisplayActivityText] = useState(false);

  function getActivities(selectedCategoryName: string) {
    const selectedCategoryNameEnglish = CATEGORIES[selectedCategoryName];

    fetch(`api/filter?type=${selectedCategoryNameEnglish}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("activity SUCCESS!", data);
        const activitiesList = data;
        const getRandomInt = () => {
          return Math.floor(Math.random() * activitiesList.length);
        };
        const randomNumber = getRandomInt();
        setCurrentActivity(activitiesList[randomNumber]?.activity);
        setDisplayActivityText(true);
      })
      .catch((error) => {
        console.log("Error", error)
        alert("Too many requests, please try again later.");
      });
  }

  return (
    <ActivityGeneratorContext.Provider
      value={{
        getActivities,
        selectedCategoryName,
        setSelectedCategoryName,
        currentActivity,
        setCurrentActivity,
        displayActivityText,
        setDisplayActivityText,
      }}
    >
      {children}
    </ActivityGeneratorContext.Provider>
  );
};
