class Launch{
    id: number;
    launchCode: number;
    date: string;
    success: boolean;
    rocketId: number;
    crewId: number;
    constructor(id: number, launch: number, date: string, success: boolean){
        this.id = id;
        this.launchCode = launch;
        this.date =date;
        this.success = success;
    }
}
export default Launch;