import { Component } from '@angular/core';

@Component({
  selector: 'app-listagem-de-viagens',
  templateUrl: './listagem-de-viagens.component.html',
  styleUrls: ['./listagem-de-viagens.component.css']
})
export class ListagemDeViagensComponent {
 clicavel = true;
 detalhesJapao() {
  if (!this.clicavel){
    return;
  }
  this.detalhesJapao;
  this.clicavel = false;
}
}
