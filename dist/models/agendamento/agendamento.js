"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agendamento = void 0;
class Agendamento {
    constructor() {
        this.idAgendamento = '';
        this.data = new Date;
        this.tipoServico = '';
        this.taxa = 0;
        this.local = '';
        this.status = true;
    }
    getstatus() {
    }
    getAgendamentos(user) {
        //const response = this.repositoryAgendamentos.findMany(user)
        //return response
    }
    getRealizarAgendamentos(formularioAgendamento) {
        //const response = this.repositoryAgendamento.create(formularioAgendamento)
        //return response
    }
}
exports.Agendamento = Agendamento;
