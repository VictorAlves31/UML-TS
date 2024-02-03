import { Cliente } from "./models/usuario/cliente";
import { Renach } from "./models/renach/renach";
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Agendamento } from "./models/agendamento/agendamento";
import { Servico } from "./models/servico/servico";
import { Usuario } from "./models/usuario/usuario";
import { Funcionario } from "./models/usuario/funcionario";

// INSTANCIANDO A CONEXAO DO BANCO COM A APLICACAO
const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "test",
    entities: [Agendamento, Renach, Servico,Cliente, Usuario, Funcionario],
    synchronize: true,
    logging: false,
})

// INICIALIZA A CONEXAO
AppDataSource.initialize()
    .then(async () => {
        //ADICIONAR UM OBJETO NOVO NO BANCO
        const usuario = new Usuario()
        usuario.login = 'VAlves'
        usuario.nome = 'Victor Alves'
        usuario.senha = '12345'
        usuario.statusLogin= true

        await AppDataSource.manager.save(usuario)

        const agendamento = new Agendamento()
        agendamento.data = new Date()
        agendamento.local = 'Detran Sede'
        agendamento.status = true
        agendamento.taxa = 12
        agendamento.tipoServico = 'Pagamento de Multa'

        await AppDataSource.manager.save(agendamento)

        const renach = new Renach()
        renach.numberRenach = 1234567891
        renach.pontos = 19
        renach.situacao = 'Regular'
        renach.validade = new Date('01/10/2024')

        await AppDataSource.manager.save(renach)

        //CONSULTANDO UM USUARIO NO BANCO
        console.log(await AppDataSource.manager.find(Usuario, {where: {idUser : 1}}))

        //CONSULTANDO UM SITUAÇÃO DO RENACH NO BANCO
        console.log(await AppDataSource.manager.find(Renach, {where: {numberRenach : 1234567891}}))


        console.log("Sucess Connection")
        
    })
    .catch((error) => console.log(error))





