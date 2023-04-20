import { Entity, JoinColumn, Column, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Launch } from "./Launch";

@Entity("rocket")
export class Rocket{
    @Column()
    private name: string;
    @PrimaryGeneratedColumn()
    public id: number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }
}