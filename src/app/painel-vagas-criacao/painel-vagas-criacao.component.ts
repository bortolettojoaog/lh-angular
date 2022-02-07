import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-painel-vagas-criacao',
  templateUrl: './painel-vagas-criacao.component.html',
  styleUrls: ['./painel-vagas-criacao.component.css']
})
export class PainelVagasCriacaoComponent implements OnInit {

  public vaga: Vaga = new Vaga(0, "", "", "", 0, "");

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this._vagasService.cadastrarVaga(this.vaga).subscribe(
      vaga => { this.vaga = new Vaga(0, "", "", "", 0, "") },
      err => { console.log("erro ao cadastrar") }
    );

    window.location.href="/mural";
  }
}
