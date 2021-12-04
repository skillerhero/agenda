import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { ContactoService } from '../contacto.service';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  usuario:any
  contacto:any
  constructor(private contactoService:ContactoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
        this.contacto= this.router.getCurrentNavigation().extras.state.contacto;
        this.contactoService.getContacto(this.usuario.id).subscribe(
          data => {
            if(data){
              this.contacto = data;
            }
          });
      }else{
        this.router.navigateByUrl('');
      }
    });
  }
  

  onRegresar(){
    let navigationExtras: NavigationExtras = { state: { usuario: this.usuario } };
    this.router.navigateByUrl('contactos', navigationExtras);
  }

}
