"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = require("./models/usuario/cliente");
const renach_1 = require("./models/renach/renach");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const agendamento_1 = require("./models/agendamento/agendamento");
const servico_1 = require("./models/servico/servico");
const usuario_1 = require("./models/usuario/usuario");
const funcionario_1 = require("./models/usuario/funcionario");
// INSTANCIANDO A CONEXAO DO BANCO COM A APLICACAO
const AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "test",
    entities: [agendamento_1.Agendamento, renach_1.Renach, servico_1.Servico, cliente_1.Cliente, usuario_1.Usuario, funcionario_1.Funcionario],
    synchronize: true,
    logging: false,
});
// INICIALIZA A CONEXAO
AppDataSource.initialize()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    //ADICIONAR UM OBJETO NOVO NO BANCO
    const usuario = new usuario_1.Usuario();
    usuario.login = 'VAlves';
    usuario.nome = 'Victor Alves';
    usuario.senha = '12345';
    usuario.statusLogin = true;
    yield AppDataSource.manager.save(usuario);
    const agendamento = new agendamento_1.Agendamento();
    agendamento.data = new Date();
    agendamento.local = 'Detran Sede';
    agendamento.status = true;
    agendamento.taxa = 12;
    agendamento.tipoServico = 'Pagamento de Multa';
    yield AppDataSource.manager.save(agendamento);
    const renach = new renach_1.Renach();
    renach.numberRenach = 1234567891;
    renach.pontos = 19;
    renach.situacao = 'Regular';
    renach.validade = new Date('01/10/2024');
    yield AppDataSource.manager.save(renach);
    //CONSULTANDO UM USUARIO NO BANCO
    console.log(yield AppDataSource.manager.find(usuario_1.Usuario, { where: { idUser: 1 } }));
    //CONSULTANDO UM SITUAÇÃO DO RENACH NO BANCO
    console.log(yield AppDataSource.manager.find(renach_1.Renach, { where: { numberRenach: 1234567891 } }));
    console.log("Sucess Connection");
}))
    .catch((error) => console.log(error));
