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
exports.Cliente = void 0;
const typeorm_1 = require("typeorm");
const agendamento_1 = require("../agendamento/agendamento");
const usuario_1 = require("./usuario");
const renach_1 = require("../renach/renach");
let Cliente = class Cliente extends usuario_1.Usuario {
};
exports.Cliente = Cliente;
__decorate([
    (0, typeorm_1.OneToOne)(() => renach_1.Renach),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", renach_1.Renach)
], Cliente.prototype, "renach", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Cliente.prototype, "renavam", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => agendamento_1.Agendamento, (agendamento) => agendamento.user),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Cliente.prototype, "agendamentos", void 0);
exports.Cliente = Cliente = __decorate([
    (0, typeorm_1.Entity)()
], Cliente);
