import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { CompanhiaComponent } from './companhia/companhia.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { CadastrarNoticiaComponent } from './cadastrar-noticia/cadastrar-noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefaComponent,
    CaracteristicasComponent,
    CompanhiaComponent,
    ContatoComponent,
    HomeComponent,
    CadastrarNoticiaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
