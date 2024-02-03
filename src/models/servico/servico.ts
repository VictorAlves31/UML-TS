import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Agendamento } from "../agendamento/agendamento";

@Entity()
export class Servico{
    @PrimaryGeneratedColumn()
    idService?:number;

    @Column()
    tipo?: string;

    @Column()
    valor?: Number;

    @ManyToOne(()=>Agendamento, (agendamento) => agendamento.service)
    agendamentos?:Agendamento

}