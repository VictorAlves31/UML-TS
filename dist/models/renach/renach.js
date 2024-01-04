"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renach = void 0;
class Renach {
    constructor() {
        this.DBRENACH = {
            12323213: {
                pontos: 3,
                validade: '30/12/2024',
                situacao: 'OK'
            },
            1442: {
                pontos: 3,
                validade: '30/12/2024',
                situacao: 'OK'
            },
            100: {
                pontos: 3,
                validade: '30/12/2024',
                situacao: 'OK'
            },
        };
        this.pontos = '';
        this.validade = '';
        this.situacao = '';
    }
    getpontos() {
        //const response = this.repositoryRenach.findOne(user)
        //return response
    }
    getvalidade() {
        //const response = this.repositoryRenach.findOne(user)
        //return response
    }
    getsituacao() {
        return this.DBRENACH[100];
        //const response = this.repositoryRenach.findOne(user)
        //return response
    }
}
exports.Renach = Renach;
