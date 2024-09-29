import { createContext, ReactNode, useEffect, useState } from "react";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

type ActivityDetails = {
  activity: string,
  availability: number,
  type: string,
  participants: number,
  price: number,
  accessibility: string,
  duration: string,
  kidFriendly: boolean,
  link: string,
  key: string,
};

const defaultActivityGeneratorContext = {
  getActivities: (() => { }) as (id: string) => void,
  ActivitiesList: [] as ActivityDetails[],
  setActivitiesList: (() => { }) as SetState<ActivityDetails[]>,
};

export const ActivityGeneratorContext = createContext<
  typeof defaultActivityGeneratorContext
>(defaultActivityGeneratorContext);

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

  const [ActivitiesList, setActivitiesList] = useState<ActivityDetails[]>([])

  function getActivities() {
    fetch("api/filter?type=education")
      .then((response) => response.json())
      .then((data) => {
        console.log("activity SUCCESS!", data);
        setActivitiesList(data)
      })
      .catch((error) => {console.log("activity ERROR", hardcodedData);
      setActivitiesList(hardcodedData)});
  }
  
  useEffect(() => {
    console.log("ActivitiesList has been updated:", ActivitiesList);
  }, [ActivitiesList]);  


  return (
    <ActivityGeneratorContext.Provider
      value={{
        getActivities,
        ActivitiesList,
        setActivitiesList,
      }}
    >
      {children}
    </ActivityGeneratorContext.Provider>
  );
};
