class Usuario{
    login: string;
    statusLogin: boolean;
    senha: string;

    constructor(){
        this.login = '';
        this.senha = '';
        this.statusLogin = true;

    }


    public verifyLogin(login: string,senha: string) : boolean{
        if (login === this.login && senha === this.senha){
            return true
        }else{
            return false
        }

        
    }


} 