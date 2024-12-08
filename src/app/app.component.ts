import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotaoBlueComponent } from "./components/botao-blue/botao-blue.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { MedicamentosComponent } from "./pages/medicamentos/medicamentos.component";
import { OpineComponent } from "./pages/opine/opine.component";
import { LoginComponent } from './pages/login/login.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BotaoBlueComponent, HeaderComponent, HomeComponent, FooterComponent, MedicamentosComponent, OpineComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BusqueMedFront';
}
