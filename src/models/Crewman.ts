import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity("crewman")
export class Crewman{
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    public name: string;

    @Column()
    public patent: string;

    constructor(name: string, patent: string){
        this.name=name;
        this.patent=patent;
    }
}