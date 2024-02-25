"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agendamento = void 0;
const typeorm_1 = require("typeorm");
const cliente_1 = require("../usuario/cliente");
const servico_1 = require("../servico/servico");
// Definição do Mediador
class AgendamentoMediator {
    constructor() { }
    static getInstance() {
        if (!AgendamentoMediator.instance) {
            AgendamentoMediator.instance = new AgendamentoMediator();
        }
        return AgendamentoMediator.instance;
    }
    // Método para processar agendamentos
    processarAgendamento(agendamento) {
        // Lógica para processar o agendamento, coordenando com outras partes do sistema
        //
        //sendNotification(agendamento.user, "Agendamento realizado com sucesso!");
        console.log("Enviada notificação de agendamento ao funcionário responsável");
        //
        // Por exemplo, enviar notificações, atualizar informações, etc.
    }
}
let Agendamento = class Agendamento {
    constructor() {
        // Registra o agendamento no mediador quando criado
        AgendamentoMediator.getInstance().processarAgendamento(this);
    }
};
exports.Agendamento = Agendamento;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Agendamento.prototype, "idAgendamento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Agendamento.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Agendamento.prototype, "tipoServico", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Agendamento.prototype, "taxa", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Agendamento.prototype, "local", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Agendamento.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cliente_1.Cliente, (user) => user.agendamentos),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", cliente_1.Cliente)
], Agendamento.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => servico_1.Servico, (service) => service.tipo),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Agendamento.prototype, "service", void 0);
exports.Agendamento = Agendamento = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [])
], Agendamento);
