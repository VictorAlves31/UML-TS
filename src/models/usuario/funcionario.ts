class Funcionario extends Usuario{
    nome: string;
    matricula: number;

    constructor(){
        super()
        this.nome = '';
        this.matricula = 0;
    }
    
    getrealizarServico(idAgendamento:number){
        //const response = this.repositoryAgendamentos.update(idAgendamento,{status:1})
        //return response

    }
    getfinalizarServico(){
        //const response = this.repositoryAgendamentos.update(idAgendamento,{status:2})
        //return response

    }
}