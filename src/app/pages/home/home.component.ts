import { Component } from '@angular/core';
import { BotaoBlueComponent } from "../../components/botao-blue/botao-blue.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BotaoBlueComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
