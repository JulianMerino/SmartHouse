import { Component,OnInit  } from '@angular/core';

import {DatosI} from'src/app/interfaces/datos';

import {SensoresService} from 'src/app/services/sensores.service';
import {Chart, registerables} from 'chart.js';


@Component({
  selector: 'app-temp',
  templateUrl: './temp.page.html',
  styleUrls: ['./temp.page.scss'],
})
export class TempPage implements OnInit {
  
  title = 'SmartHouse';
  sensores: DatosI[];
  chart: any = []
  limit: DatosI[];
 

  constructor( public sensoresService:SensoresService) {
    this.sensores=[];

    Chart.register(...registerables)
     
   
    
  }

  ngOnInit(){

     this.sensoresService.getSensores().subscribe(res => {
    
/*
      const ldr = res.map(res => res.ldr);

      const fecha = res.map(res => res.time);
      console.log(ldr);

      */
      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels:  res.map(res => res.time),
          
          datasets: [
            {
              data:res.map(res => res.ldr),
            
    
              borderColor: 'blue',
              
              label: 'luminosidad  Relativa',
              backgroundColor: 'blue',
              borderWidth: 3,
            },
          ],
        },
       
      });
      
      
    });    
  }


}


