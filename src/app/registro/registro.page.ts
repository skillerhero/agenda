import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../registro.service';
import {Router} from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario:any
  contrasenia:any
  contrasenia2:any
  constructor(private registroService:RegistroService, private router: Router, public alertController: AlertController, public toastController: ToastController) { }

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

  onRegistrar(){
    if(this.contrasenia != this.contrasenia2){
      this.alerta("Las contraseñas no coinciden", "Vuelva a ingresar la contraseña.");
    }else{
      this.registroService.registrarUsuario(this.usuario, this.contrasenia).subscribe(
        data => {
          if(data.code == "ok"){
            console.log("Usuario registrado con éxito.")
            this.mensajeToast("Usuario registrado con éxito.");
            this.router.navigateByUrl('');
          }else if(data.code == "existe"){
            console.log("Usuario o contraseña incorrecta")
            this.alerta("Usuario ya existe", "Ingrese otro nombre de usuario.");
          }else{
            console.log("Ha ocurrido un error al registrar el usuario.");
            this.alerta("Ha ocurrido un error al registrar el usuario.", "Intentelo más tarde");
          }
        }
    );
    }

  }

}
