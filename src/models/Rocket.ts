import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("rocket")
export class Rocket{
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public name: string;

    constructor(id: number, name: string ){
        this.id = id;
        this.name = name;
    }
}