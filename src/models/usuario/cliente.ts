class Cliente extends Usuario{
    nome: string;
    renach: Number;
    renavam: Number;

    constructor(){
        super()
        this.nome = '';
        this.renach = 0;
        this.renavam = 0

    }
    
    getAgendamentos(user:Cliente){
        // const response = this.repositoryAgendamentos.findMany(user)
        //return response

    }
    getRealizarAgendamentos(formularioAgendamento:Agendamento){
        //const response = this.repositoryAgendamento.create(formularioAgendamento)
        //return response

    }
    getPontos(user:Cliente){
        //const pontos = Renach.getPontos(user)
        //return pontos

    }
    getSituacao(){
        //const situ = Renach.getSituacao(user)
        //return situ

    }
    
}