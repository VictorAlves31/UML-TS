"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const agendament_1 = require("./models/agendamento/agendament");
const usuario_1 = require("./models/usuario/usuario");
const renach_1 = require("./models/renach/renach");
const servico_1 = require("./models/servico/servico");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [agendament_1.AgendamentoEntity, usuario_1.Usuario, renach_1.Renach, servico_1.Servico],
    migrations: [],
    subscribers: [],
});
