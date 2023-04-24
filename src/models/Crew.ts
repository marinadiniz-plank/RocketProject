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

    constructor(name: string, id: number, crewman: Crewman[]){
        this.name = name;
        this.id = id;
        this.crewman = crewman;
    }
}