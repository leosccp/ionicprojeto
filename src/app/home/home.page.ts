import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOption = {
    initialSlide: 1,
    speed: 400
  }
 data: any;
 usuario:any;
 senha:any;

 
constructor(private route: ActivatedRoute, private router: Router) {
  this.route.queryParams.subscribe(params => {
    if (params && params.special) {
      this.data = JSON.parse(params.special);
      console.log(params.special);      
      console.log(this.data);
      this.usuario = this.data.username;
      this.senha = this.data.password;
      console.log(this.usuario);
      console.log(this.senha);      


    }
  });
};
}
