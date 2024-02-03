import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { Agendamento } from "../agendamento/agendamento";
import { Usuario } from "./usuario";
import { Renach } from "../renach/renach";

@Entity()
export class Cliente extends Usuario{
    @OneToOne(() => Renach)
    @JoinColumn()
    renach?: Renach;

    @Column()
    renavam?: Number;

    @OneToMany(()=> Agendamento, (agendamento)=> agendamento.user)
    @JoinColumn()
    agendamentos?: Agendamento[]

}