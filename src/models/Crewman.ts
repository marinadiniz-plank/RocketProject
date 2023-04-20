import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable} from "typeorm";
import { Crew } from "./Crew";

@Entity("crewman")
export class Crewman{
    @Column()
    private name: string;
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    private patent: string;
    

    @ManyToMany(() => Crew)
    @JoinTable({name: "crew_crewman"})
    crew : Crew[];

    constructor(name: string, id: number, patent: string, crew: Crew[]){
        this.name=name;
        this.id=id;
        this.patent=patent;
        this.crew=crew;
    }
}