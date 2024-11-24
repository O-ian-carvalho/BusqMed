import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

  constructor(private client: HttpClient) {  
  }


  getMedicamentos() : Observable<any>
  {
    return this.client.get(`https://busque-med-front.vercel.app/db/medicamentos`);
  }


}
