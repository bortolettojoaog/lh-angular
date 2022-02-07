import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.css']
})
export class PainelVagasComponent implements OnInit {

  public vaga: Vaga = new Vaga(0, "", "", "", 0, "");
  public vagas: Vaga[] = [];

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }

  atualizar(id: number, nome: string, descricao: string, beneficios: string, salario: number, imagem: string) {
    this.vaga = new Vaga(id, nome, imagem, descricao, salario, beneficios);
    this._vagasService.atualizarVaga(id, this.vaga).subscribe(
      vaga => { this.vaga = new Vaga(0, "", "", "", 0, "") },
      err => { console.log("erro ao atualizar") }
    );

    window.location.href="/mural";
  }

  excluir(id: number) {
    this._vagasService.removerVaga(id).subscribe(
      vaga => { this.vaga = new Vaga(0, "", "", "", 0, "") },
      err => { console.log("erro ao excluir") }
    );

    window.location.href="/mural";
  }

  listarVagas() {
      this._vagasService.getVagas().subscribe(
          vaga => {
              this.vagas = vaga.map(
                  item => { 
                      return new Vaga(
                          item.id,
                          item.nome,
                          item.imagem,
                          item.descricao,
                          item.salario,
                          item.beneficios
                      ); 
                  }
              )
          }
      )
  }

}
