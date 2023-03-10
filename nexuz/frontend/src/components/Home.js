import { useEffect, useState } from "react";
import WorkoutDetails from "./WorkoutDetails";
const Home = () => {
  const [workouts, setWorkouts] = useState("");

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      console.log(response);
      const json = await response;

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
    </div>
  );
};
export default Home;
