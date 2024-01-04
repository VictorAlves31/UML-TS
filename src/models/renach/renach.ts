class Renach{
    pontos: string;
    validade: string;
    situacao: string;

    constructor(){
        this.pontos = '';
        this.validade = '';
        this.situacao = '';
    }


    DBRENACH = {

        12323213: {
            pontos : 3,
            validade: '30/12/2024',
            situacao: 'OK'
        },

        1442: {
            pontos : 3,
            validade: '30/12/2024',
            situacao: 'OK'
        },

        100:{
            pontos : 3,
            validade: '30/12/2024',
            situacao: 'OK'
        },

    }

    getpontos(){
        //const response = this.repositoryRenach.findOne(user)
        //return response
    }
    getvalidade(){
        //const response = this.repositoryRenach.findOne(user)
        //return response
    }
    getsituacao(){
        return this.DBRENACH[100]
        //const response = this.repositoryRenach.findOne(user)
        //return response
    }

}export {Renach}