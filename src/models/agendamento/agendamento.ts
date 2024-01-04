class Agendamento{
    idAgendamento: string;
    data: Date;
    tipoServico: string;
    taxa : Number;
    local : string;
    status : boolean;

    constructor(){
        this.idAgendamento = '';
        this.data = new Date;
        this.tipoServico = '';
        this.taxa = 0;
        this.local = '';
        this.status = true;
    }

    getstatus(){

    }
    getAgendamentos(user:Cliente){
        //const response = this.repositoryAgendamentos.findMany(user)
        //return response

    }
    getRealizarAgendamentos(formularioAgendamento:Agendamento){
        //const response = this.repositoryAgendamento.create(formularioAgendamento)
        //return response

    }

}