import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable} from "typeorm";
import { Crewman } from "./Crewman";

@Entity("crew")
export class Crew{
    @Column()
    public name: string;
    @PrimaryGeneratedColumn()
    public id: number;

    @ManyToMany(() => Crewman, {eager: true})
    @JoinTable({name: "crew_crewman"})
    crewman : Crewman[];

    constructor(id: number, name: string, crewman: Crewman[]){
        this.id = id;
        this.name = name;
        this.crewman = crewman;
    }
}