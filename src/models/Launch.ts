import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Rocket } from "./Rocket";
import { Crew } from "./Crew";

@Entity("launch")
export class Launch{
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    launchCode: number;
    @CreateDateColumn()
    date: string;
    @Column()
    success: boolean;

    @OneToOne(() => Rocket, {eager: true})
    @JoinColumn({name: "rocket_id"})
    rocket: Rocket;

    @OneToOne(() => Crew, {eager: true})
    @JoinColumn({name: "crew_id"})
    crew: Crew;

    constructor( launch: number, date: string, success: boolean, 
         rocket: Rocket, crew: Crew, id: number){
        this.id = id;
        this.launchCode = launch;
        this.date =date;
        this.success = success;
        this.rocket = rocket;
        this.crew = crew;
    }
}