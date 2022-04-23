import { Component,OnInit  } from '@angular/core';

import {DatosI} from'src/app/interfaces/datos';

import {SensoresService} from 'src/app/services/sensores.service';
import {Chart, registerables} from 'chart.js';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.page.html',
  styleUrls: ['./grafica.page.scss'],
})
      export class GraficaPage implements OnInit {
        title = 'SmartHouse';
        sensores: DatosI[];
        chart: any = []
      


     
        constructor( private sensoresService:SensoresService) {
          this.sensores=[];

          Chart.register(...registerables)
           
         
        }
    
      
  ngOnInit(){
    

    this.sensoresService.getSensores().subscribe(res => {
      

    //  const distance = res.map(res => res.distancia);

     // const fecha = res.map(res => res.time);
      //console.log(distance);

      
      this.chart = new Chart('mychart', {
        type: 'bar',
        data: {
          labels: res.map(res => res.time),
          
          datasets: [
            {
              data:res.map(res => res.distancia),
            
    
              borderColor: 'blue',
              
              label: 'Distancia  Relativa',
              backgroundColor: 'blue',
              borderWidth: 3,
            },
          ],
        },
       
      });
      
      
    });    
 }

}
