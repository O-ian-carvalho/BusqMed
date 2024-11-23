import { Component } from '@angular/core';
import { BotaoBlueComponent } from "../botao-blue/botao-blue.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BotaoBlueComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
