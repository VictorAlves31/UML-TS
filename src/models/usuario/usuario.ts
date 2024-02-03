import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario{
    @PrimaryGeneratedColumn()
    idUser?: number;

    @Column()
    nome?: string;

    @Column()
    login?: string;

    @Column()
    statusLogin?: boolean;

    @Column()
    senha?: string;

}