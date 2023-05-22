import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity("crewman")
export class Crewman{
    @Column()
    public name: string;
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public patent: string;

    constructor(id: number, name: string, patent: string){
        this.id=id;
        this.name=name;
        this.patent=patent;
    }
}