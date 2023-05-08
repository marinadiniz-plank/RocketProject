import crewData from "./crewData";
import rocketData from "./rocketData";

const launch1 = {
    id: 1,
    launchCode: 340,
    date: "2012/23/9",
    success: true,
    rocket: rocketData.rocket1,
    crew: crewData.crew1
  };
  
  const launch2 = {
    id: 2,
    launchCode: 340,
    date: "2012/30/9",
    success: false,
    rocket: rocketData.rocket2,
    crew: crewData.crew2
  };
  
  const launchData = [launch1, launch2];
  
  export default { launch1, launch2, launchData}
