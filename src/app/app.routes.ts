import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MedicamentosComponent } from './pages/medicamentos/medicamentos.component';
import { OpineComponent } from './pages/opine/opine.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [


    { path: '', component: HomeComponent },
    { path: 'medicamentos', component: MedicamentosComponent }, 
    { path: 'opine', component: OpineComponent },
    { path: 'login', component: LoginComponent }
];
