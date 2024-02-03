import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, DataSource } from "typeorm";
import { Cliente } from "../usuario/cliente";
import { Servico } from "../servico/servico";

@Entity()
export class Agendamento{
    @PrimaryGeneratedColumn()
    idAgendamento?: number;

    @Column()
    data?: Date;

    @Column()
    tipoServico?: string;

    @Column()
    taxa?: Number;
    
    @Column()
    local?: string;

    @Column()
    status?: boolean;

    @ManyToOne(()=> Cliente, (user) => user.agendamentos)
    @JoinColumn()
    user?: Cliente;

    @OneToMany(()=> Servico, (service)=> service.tipo)
    @JoinColumn()
    service?: Servico[];



}

