import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Renach{
    @PrimaryColumn()
    numberRenach?:number;

    @Column()
    pontos?: number;

    @Column()
    validade?: Date;

    @Column()
    situacao?: string;

}