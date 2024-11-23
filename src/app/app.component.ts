import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotaoBlueComponent } from "./components/botao-blue/botao-blue.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BotaoBlueComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BusqueMedFront';
}
