import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wesley-personal';

  public slides = [
    { src: "./assets/ALUNO3.png" },
    { src: "./assets/ALUNO1.png" },
    { src: "./assets/ALUNO2.png" },
    { src: "./assets/ALUNO4.png" },
    { src: "./assets/ALUNO5.png" },
  ];

  
}
