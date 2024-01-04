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
        //const Agendamento = Agendamentos.getAgendamento(user)
        //return Agendamento

    }
    getRealizarAgendamentos(formularioAgendamento:Agendamento){
        //const realizarAgendamento = Agendamentos.getrealizarAgendamento(user)
        //return realizarAgendamento
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