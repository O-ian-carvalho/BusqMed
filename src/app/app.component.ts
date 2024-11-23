import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotaoBlueComponent } from "./components/botao-blue/botao-blue.component";

import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, BotaoBlueComponent, HeaderComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BusqueMedFront';
}
