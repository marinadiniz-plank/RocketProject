import Crewman from "./Crewman";

class Crew{
    private name: string;
    public id: number;
    private crewCrewmanId: Crewman[];
    constructor(name: string, id: number, crewCrewmanId:  Crewman[]){
        this.name = name;
        this.id = id;
        this.crewCrewmanId = crewCrewmanId;
    }
}
export default Crew;