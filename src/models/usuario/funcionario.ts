import { Column, Entity } from "typeorm";
import { Usuario } from "./usuario";

@Entity()
export class Funcionario extends Usuario{
    @Column()
    matricula?: number;

}