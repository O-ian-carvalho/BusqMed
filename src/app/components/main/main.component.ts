import { Component } from '@angular/core';
import { BotaoBlueComponent } from "../botao-blue/botao-blue.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BotaoBlueComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
