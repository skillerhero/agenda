import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { RegistroContactoService } from '../registro-contacto.service';

@Component({
  selector: 'app-registro-contacto',
  templateUrl: './registro-contacto.page.html',
  styleUrls: ['./registro-contacto.page.scss'],
})
export class RegistroContactoPage implements OnInit {
  nombre:any
  telefono:any
  correo:any
  facebook:any
  twitter:any
  instagram:any
  foto:any
  usuario:any
  constructor(private registroContacto:RegistroContactoService, private route: ActivatedRoute, private router: Router, public alertController: AlertController, public toastController: ToastController) {
    this.nombre = ""
    this.telefono = ""
    this.correo = ""
    this.facebook = ""
    this.twitter = ""
    this.instagram = ""
    this.foto = ""
    this.usuario = ""
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario= this.router.getCurrentNavigation().extras.state.usuario;
      }else{
        this.router.navigateByUrl('');
      }
    });
  }

  ngOnInit() {
  }

  async mensajeToast(mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
    
  async alerta(encabezado:string, mensaje:string) {
    const alert = await this.alertController.create({
      //cssClass: 'my-custom-class',
      header: encabezado,
      //subHeader: subtitulo, 
      message: mensaje,
      buttons: ['Ok']
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
  }

  onRegresar(){
    let navigationExtras: NavigationExtras = { state: { usuario: this.usuario } };
    this.router.navigateByUrl('contactos', navigationExtras);
  }

  onAgregar(){
    if(this.nombre=="" || this.telefono=="" || this.correo=="" || this.facebook=="" || this.twitter=="" || this.instagram=="" || this.foto=="" || this.usuario==""){
      console.log("Llene todos los campos.");
      this.alerta("Llene todos los campos.", "");
    }else{
      this.registroContacto.registrarContacto(this.nombre, this.telefono, this.correo, this.facebook, this.twitter, this.instagram, this.foto, this.usuario).subscribe(
      data => {
        if(data.code == "ok"){
          console.log("Contacto agregado con éxito.")
          this.mensajeToast("Contacto agregado con éxito.");
          this.onRegresar();
        }else{
          console.log("Ha ocurrido un error al agregar el contacto.");
          this.alerta("Ha ocurrido un error al agregar el contacto.", "Intentelo más tarde");
        }
      }
      );
    }
  }
}
