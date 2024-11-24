import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-remedio',
  standalone: true,
  imports: [],
  templateUrl: './card-remedio.component.html',
  styleUrl: './card-remedio.component.css'
})
export class CardRemedioComponent {
   @Input() titulo: string = "titulo";
  @Input() descricao: string = "description";
}
