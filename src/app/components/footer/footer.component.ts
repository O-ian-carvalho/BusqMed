import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { BotaoBlueComponent } from "../botao-blue/botao-blue.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgOptimizedImage, BotaoBlueComponent, BotaoBlueComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
