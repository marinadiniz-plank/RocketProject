import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity("crewman")
export class Crewman{
    @Column()
    public name: string;
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public patent: string;

    constructor(name: string, id: number, patent: string){
        this.name=name;
        this.id=id;
        this.patent=patent;
    }
}