import { Component } from '@angular/core';
import { BotaoBlueComponent } from "../../components/botao-blue/botao-blue.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-opine',
  standalone: true,
  imports: [BotaoBlueComponent, FormsModule],
  templateUrl: './opine.component.html',
  styleUrl: './opine.component.css'
})
export class OpineComponent {
  mensagem: string = ''; // Declare a variável vinculada ao ngModel
  mensagemEnviada: boolean = false;
  onInputChange($event: Event) {
  
  }

  enviarMensagem() : void{
    alert("Mensagem enviada com sucesso");
  }
}
