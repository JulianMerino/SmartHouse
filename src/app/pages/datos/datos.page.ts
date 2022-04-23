import { Component, OnInit } from '@angular/core';


import {DatosI} from'src/app/interfaces/datos';

import {SensoresService} from 'src/app/services/sensores.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
sensores:DatosI[];
  constructor(private sensoresService: SensoresService) { }

  ngOnInit() {
    this.sensoresService.getSensores().subscribe(res => {
			this.sensores = res;
		});
  }

}
