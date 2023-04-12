class Launch{
    id: number;
    launchCode: number;
    date: string;
    success: boolean;
    rocketId: number;
    crewId: number;
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