import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("rocket")
export class Rocket{
    @Column()
    public name: string;
    @PrimaryGeneratedColumn()
    public id: number;

    constructor(id: number, name: string ){
        this.id = id;
        this.name = name;
    }
}