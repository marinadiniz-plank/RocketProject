import crewmanData from "./crewmanData";

const crew1 = {
    name: "crew test 1",
    id: 1,
    crewman: [crewmanData.crewman1]
  };
  
  const crew2 = {
    name: "crew test 2",
    id: 2,
    crewman: [crewmanData.crewman1, crewmanData.crewman2]
  };
  
  const crewData = [crew1, crew2];
  
  export default { crew1, crew2, crewData}
