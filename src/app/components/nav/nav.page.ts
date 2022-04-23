import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.page.html',
  styleUrls: ['./nav.page.scss'],
})
export class NavPage implements OnInit {

  constructor(private menu: MenuController, private loading: LoadingController) { }

  ngOnInit() {
  }

  menuToggle(){

    this.menu.toggle();

  }
  async Cargando() {
    
    const loading = await this.loading.create({
    
      spinner: 'bubbles',
      duration: 1,
      message: 'Cargando...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }
}


