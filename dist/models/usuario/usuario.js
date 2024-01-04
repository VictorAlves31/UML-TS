"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor() {
        this.login = '';
        this.senha = '';
        this.statusLogin = true;
    }
    verifyLogin(login, senha) {
        if (login === this.login && senha === this.senha) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Usuario = Usuario;
