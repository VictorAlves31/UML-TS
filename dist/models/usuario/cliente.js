"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const usuario_1 = require("./usuario");
class Cliente extends usuario_1.Usuario {
    constructor() {
        super();
        this.nome = '';
        this.renach = 0;
        this.renavam = 0;
    }
    getAgendamentos(user) {
        //const Agendamento = Agendamentos.getAgendamento(user)
        //return Agendamento
    }
    getRealizarAgendamentos(formularioAgendamento) {
        //const realizarAgendamento = Agendamentos.getrealizarAgendamento(user)
        //return realizarAgendamento
    }
    getPontos(user) {
        //const pontos = Renach.getPontos(user)
        //return pontos
    }
    getSituacao() {
        //const situ = Renach.getSituacao(user)
        //return situ
    }
}
exports.Cliente = Cliente;
