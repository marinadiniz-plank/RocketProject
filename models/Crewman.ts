class Crewman{
    private name: string;
    public id: number;
    private patent: string;
    constructor(name: string, id: number, patent: string){
        this.name=name;
        this.id=id;
        this.patent=patent;
    }
}
export default Crewman;