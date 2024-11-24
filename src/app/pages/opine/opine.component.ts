import { Component } from '@angular/core';
import { BotaoBlueComponent } from "../../components/botao-blue/botao-blue.component";

@Component({
  selector: 'app-opine',
  standalone: true,
  imports: [BotaoBlueComponent],
  templateUrl: './opine.component.html',
  styleUrl: './opine.component.css'
})
export class OpineComponent {
onInputChange($event: Event) {
throw new Error('Method not implemented.');
}

}
