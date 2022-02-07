export class Vaga {

    id: number = 0;
    nome: string = "";
    imagem: string = "";
    descricao: string = "";
    salario: number = 0;
    beneficios: string = "";

    constructor(id:number, nome:string, imagem:string, descricao:string, salario:number, beneficios:string) {
        this.id = id;
        this.nome = nome;
        this.imagem = imagem;
        this.descricao = descricao;
        this.salario = salario;
        this.beneficios = beneficios;
    }
}