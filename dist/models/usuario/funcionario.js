"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("./usuario");
class Funcionario extends usuario_1.Usuario {
    constructor() {
        super();
        this.nome = '';
        this.matricula = 0;
    }
    getrealizarServico(idAgendamento) {
        //const response = this.repositoryAgendamentos.update(idAgendamento,{status:1})
        //return response
    }
    getfinalizarServico() {
        //const response = this.repositoryAgendamentos.update(idAgendamento,{status:2})
        //return response
    }
}
