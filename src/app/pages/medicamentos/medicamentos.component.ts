import { Component } from '@angular/core';
import { CardRemedioComponent } from "../../components/card-remedio/card-remedio.component";
import { MedicamentosService } from '../../services/medicamentos.service';
import { CommonModule } from '@angular/common';
import { isEmpty } from 'rxjs';


@Component({
  selector: 'app-medicamentos',
  standalone: true,
  imports: [CardRemedioComponent, CommonModule],
  templateUrl: './medicamentos.component.html',
  styleUrl: './medicamentos.component.css'
})
export class MedicamentosComponent {
    arrayList: any[] = [];
    arrayListDisplay: any[] = [];

    constructor(private service: MedicamentosService)
    {
      this.service.getMedicamentos().subscribe({
        next: (data) => {
          this.arrayList = data;
        },
        error: (error) => {
          console.error(error); // Erro
        }
      });
    }


    onInputChange(event: Event): void {
      const input = event.target as HTMLInputElement;
      this.arrayListDisplay = this.arrayList.filter(med =>
        med.titulo.toLowerCase().includes(input.value.toLowerCase())
      );
      if(!input.value.trim()){
        this.arrayListDisplay = [];
      }
    }
}
