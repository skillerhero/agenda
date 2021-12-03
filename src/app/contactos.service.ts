import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  contactos = new Subject<any[]>();
  constructor() { }
}
