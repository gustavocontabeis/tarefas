import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarefas';
  noticias = [
    {titulo: 'Título 1', subtitulo:'Subtítulo 1', img: 'assets/img/img-01.jpg'},
    {titulo: 'Título 2', subtitulo:'Subtítulo 2', img: 'assets/img/img-02.jpg'},
    {titulo: 'Título 3', subtitulo:'Subtítulo 3', img: 'assets/img/img-03.jpg'},
    {titulo: 'Título 4', subtitulo:'Subtítulo 4', img: 'assets/img/img-04.jpg'},
  ];
}
