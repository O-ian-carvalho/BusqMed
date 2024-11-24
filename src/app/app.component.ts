import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotaoBlueComponent } from "./components/botao-blue/botao-blue.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BotaoBlueComponent, HeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BusqueMedFront';
}
