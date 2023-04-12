class Crew{
    public name: string;
    public id: number;
    private crewCrewmanId: number;
    constructor(name: string, id: number, crewCrewmanId: number){
        this.name = name;
        this.id = id;
        this.crewCrewmanId = crewCrewmanId;
    }
}
export default Crew;