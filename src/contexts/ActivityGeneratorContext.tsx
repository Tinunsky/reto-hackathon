import { createContext, ReactNode } from "react";

// type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

const defaultActivityGeneratorContext = {
  getActivities: () => {},
};

export const ActivityGeneratorContext = createContext<
  typeof defaultActivityGeneratorContext>(defaultActivityGeneratorContext);

const hardcodedData = [
  {
    activity: "Learn Express.js",
    availability: 0.25,
    type: "education",
    participants: 1,
    price: 0.1,
    accessibility: "Few to no challenges",
    duration: "hours",
    kidFriendly: true,
    link: "https://expressjs.com/",
    key: "3943506",
  },
  {
    activity: "Learn React.js",
    availability: 0.5,
    type: "education",
    participants: 1,
    price: 0.2,
    accessibility: "Some challenges",
    duration: "hours",
    kidFriendly: true,
    link: "https://reactjs.org/",
    key: "7890123",
  },
];

export const ActivityGeneratorProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  function getActivities() {
    fetch("api/random")
      .then((response) => response.json())
      .then((data) => {
        console.log("activity SUCCESS!", data);
      })
      .catch((error) => console.log("activity ERROR", hardcodedData));
  }

  return (
    <ActivityGeneratorContext.Provider
      value={{
        getActivities,
      }}
    >
      {children}
    </ActivityGeneratorContext.Provider>
  );
};
