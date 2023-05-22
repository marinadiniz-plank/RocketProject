import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("rocket")
export class Rocket{
    @PrimaryGeneratedColumn()
    public id?: number;
    @Column()
    public name: string;

    constructor(name: string ){
        this.name = name;
    }
}