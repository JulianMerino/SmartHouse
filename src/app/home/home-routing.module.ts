import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'inicio',
        loadChildren: () => import('../pages/inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'grafica',
        loadChildren: () => import('../pages/grafica/grafica.module').then( m => m.GraficaPageModule)
    
      },
      {
        path: 'temp',
        loadChildren: () => import('../pages/temp/temp.module').then( m => m.TempPageModule)
      },
      {
        path: 'datos',
        loadChildren: () => import('../pages/datos/datos.module').then( m => m.DatosPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
