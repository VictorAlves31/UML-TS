import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// Definição da interface State
interface EstadoUsuario {
    logar(): void;
    deslogar(): void;
}

// Estado Concreto: Estado Ativo
class Ativo implements EstadoUsuario {
    usuario: Usuario;

    constructor(usuario: Usuario) {
        this.usuario = usuario;
    }

    logar(): void {
        console.log("O usuário já está logado.");
    }

    deslogar(): void {
        console.log("Deslogando usuário...");
        this.usuario.statusLogin = false;
    }
}

// Estado Concreto: Estado Inativo
class Inativo implements EstadoUsuario {
    usuario: Usuario;

    constructor(usuario: Usuario) {
        this.usuario = usuario;
    }

    logar(): void {
        console.log("Logando usuário...");
        this.usuario.statusLogin = true;
    }

    deslogar(): void {
        console.log("O usuário já está deslogado.");
    }
}

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    idUser?: number;

    @Column()
    nome?: string;

    @Column()
    login?: string;

    @Column()
    statusLogin?: boolean;

    @Column()
    senha?: string;

    estado: EstadoUsuario; // Referência para o estado atual do usuário

    constructor() {
        // Por padrão, quando um usuário é criado, ele está inativo
        this.estado = new Inativo(this);
    }

    // Métodos para mudar o estado do usuário
    logar(): void {
        this.estado.logar();
    }

    deslogar(): void {
        this.estado.deslogar();
    }
}
