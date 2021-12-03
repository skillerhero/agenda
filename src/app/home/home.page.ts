import { Component, OnInit } from '@angular/core';
import { SesionService } from '../sesion.service';
import {Router} from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  usuario:any
  contrasenia:any
  
  constructor(private sesionService: SesionService, private router: Router, public alertController: AlertController, public toastController: ToastController) {}
  ngOnInit() {
  }

  async mensajeToast(mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1000
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
  OnEntrar(){
    console.log("Entrar");
    this.sesionService.iniciarSesion(this.usuario, this.contrasenia).subscribe(
        data => {
          if(data.code == "ok"){
            console.log("Inicio de sesión exitoso")
            this.mensajeToast("Inicio de sesión exitoso.");
            let navigationExtras: NavigationExtras = { state: { usuario: this.usuario } };
            this.router.navigateByUrl('contactos', navigationExtras);
          }else{
            console.log("Usuario o contraseña incorrecta")
            this.alerta("Datos incorrectos", "Usuario o contraseña incorrecta");
          }
        }
    );
  }

}
