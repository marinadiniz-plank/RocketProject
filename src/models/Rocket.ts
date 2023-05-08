import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("rocket")
export class Rocket{
    @Column()
    public name: string;
    @PrimaryGeneratedColumn()
    public id: number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }
}