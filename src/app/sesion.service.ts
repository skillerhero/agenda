import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  constructor(private http: HttpClient) {
    
  }
  iniciarSesion(usuario, contrasenia): Observable<any>{
    return this.http.post("/api/sesion", 
    {
      "usuario": usuario,
      "contrasenia": contrasenia
    }
    );
  }
}
