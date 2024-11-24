import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MedicamentosComponent } from './pages/medicamentos/medicamentos.component';

export const routes: Routes = [


    { path: '', component: HomeComponent },
    { path: 'medicamentos', component: MedicamentosComponent }
];
