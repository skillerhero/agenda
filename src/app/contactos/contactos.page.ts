import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { Subject } from 'rxjs';
import { ContactosService } from '../contactos.service';
@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {
  usuario: any
  contactos =  [];
  constructor(private contactosService:ContactosService, private route: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario= this.router.getCurrentNavigation().extras.state.usuario;
        this.contactosService.usuario = this.usuario;
        this.contactosService.getContactos();
        this.contactosService.contactos.subscribe(contactos=>{
          this.contactos = contactos;
        });
      }else{
        this.router.navigateByUrl('');
      }
    });
  }

  onAgregar(){
    let navigationExtras: NavigationExtras = { state: { usuario: this.usuario } };
    this.router.navigateByUrl('registro-contacto', navigationExtras);
  }

  onGetContacto(contacto:any){
    let navigationExtras: NavigationExtras = { state: { usuario: this.usuario, contacto : contacto} };
    this.router.navigateByUrl('contacto', navigationExtras);
  }
}
