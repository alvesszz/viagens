import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DetalhesDaViagemComponent } from './detalhes-da-viagem/detalhes-da-viagem.component';
import { NovaViagemComponent } from './nova-viagem/nova-viagem.component';
import { ExcluirViagemComponent } from './excluir-viagem/excluir-viagem.component';
import { ListagemDeViagensComponent } from './listagem-de-viagens/listagem-de-viagens.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DetalhesDaViagemComponent,
    NovaViagemComponent,
    ExcluirViagemComponent,
    ListagemDeViagensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
