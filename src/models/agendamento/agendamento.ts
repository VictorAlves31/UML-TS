import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, DataSource } from "typeorm";
import { Cliente } from "../usuario/cliente";
import { Servico } from "../servico/servico";
import { send } from "process";

// Definição do Mediador
class AgendamentoMediator {
    static instance: AgendamentoMediator; // Singleton instance

    private constructor() {}

    static getInstance(): AgendamentoMediator {
        if (!AgendamentoMediator.instance) {
            AgendamentoMediator.instance = new AgendamentoMediator();
        }
        return AgendamentoMediator.instance;
    }

    // Método para processar agendamentos
    processarAgendamento(agendamento: Agendamento): void {
        // Lógica para processar o agendamento, coordenando com outras partes do sistema

        //
        //sendNotification(agendamento.user, "Agendamento realizado com sucesso!");
        console.log("Enviada notificação de agendamento ao funcionário responsável")
        //
        // Por exemplo, enviar notificações, atualizar informações, etc.
    }
}

@Entity()
export class Agendamento {
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

    @ManyToOne(() => Cliente, (user) => user.agendamentos)
    @JoinColumn()
    user?: Cliente;

    @OneToMany(() => Servico, (service) => service.tipo)
    @JoinColumn()
    service?: Servico[];

    constructor() {
        // Registra o agendamento no mediador quando criado
        AgendamentoMediator.getInstance().processarAgendamento(this);
    }
}


