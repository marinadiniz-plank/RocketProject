class Launch{
    public id: number;
    private launchCode: number;
    private date: string;
    private success: boolean;
    private rocketId: number;
    private crewId: number;
    constructor(id: number, launch: number, date: string, success: boolean, rocketId: number, crewId: number){
        this.id = id;
        this.launchCode = launch;
        this.date =date;
        this.success = success;
        this.rocketId = rocketId;
        this.crewId = crewId;
    }
}
export default Launch;