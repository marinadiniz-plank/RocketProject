import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Crew } from "./Crew";
import { Rocket } from "./Rocket";

@Entity("launch")
export class Launch {
    @PrimaryGeneratedColumn()
    public id?: number;
    @Column()
    launchCode: string;
    @CreateDateColumn()
    date: string;
    @Column()
    success: boolean;

    @OneToOne(() => Rocket, { eager: true })
    @JoinColumn({ name: "rocket_id" })
    rocket: Rocket;

    @OneToOne(() => Crew, { eager: true })
    @JoinColumn({ name: "crew_id" })
    crew: Crew;

    constructor(launch: string, date: string, success: boolean,
        rocket: Rocket, crew: Crew) {
        this.launchCode = launch;
        this.date = date;
        this.success = success;
        this.rocket = rocket;
        this.crew = crew;
    }
}