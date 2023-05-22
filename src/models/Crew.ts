import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable} from "typeorm";
import { Crewman } from "./Crewman";

@Entity("crew")
export class Crew{
    @PrimaryGeneratedColumn()
    public id?: number;
    @Column()
    public name: string;

    @ManyToMany(() => Crewman, {eager: true})
    @JoinTable({name: "crew_crewman"})
    crewman : Crewman[];

    constructor( name: string, crewman: Crewman[]){
        this.name = name;
        this.crewman = crewman;
    }
}