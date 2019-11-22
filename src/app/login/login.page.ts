import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
username = "";
password = "";

  constructor(public toastController: ToastController, private router:Router) { }

  ngOnInit() {
  }

  LogIn() {
    if ((this.username == "manga") && (this.password == "1234")) {
    console.log('Logado com sucesso');
    this.showToast('Logado com sucesso');

    let usuario = {
      username : this.username,
      password : this.password
    } 

    this.username = "";
    this.password = ""; 

    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(usuario)
      }
    };
    this.router.navigate(['home'], navigationExtras);
    }
    else
    {
      // limpa o form
      this.username = '';
      this.password = '';
      console.log('Error');
      this.showToast('Usuário não logado');
    };
  }  
  LogOut() {
    
    console.log('Usuário deslogado');

      this.username = '';
      this.password = '';
      this.showToast('Usuário deslogado');
    }

    async showToast(msg) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 2000
      });
      toast.present();
    }    
  
}