import { Cliente } from "./models/usuario/cliente";
import { Renach } from "./models/renach/renach";

const user = new Cliente();
user.nome = 'Victor';
user.renach = 100;


const renach = new Renach();
const situacao = renach.getsituacao();


console.log(situacao);