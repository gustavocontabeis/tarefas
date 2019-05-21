import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefaComponent } from './tarefa/tarefa.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { CompanhiaComponent } from './companhia/companhia.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { CadastrarNoticiaComponent } from './cadastrar-noticia/cadastrar-noticia.component';

const routes: Routes = [
  {path:'tarefa', component: TarefaComponent},
  {path:'caracteristicas', component: CaracteristicasComponent},
  {path:'companhia', component: CompanhiaComponent},
  {path:'contato', component: ContatoComponent},
  {path:'home', component: HomeComponent},
  {path:'cadastrar-noticia', component: CadastrarNoticiaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
