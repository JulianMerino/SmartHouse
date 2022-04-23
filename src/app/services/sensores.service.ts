
import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection, } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';
import{ map } from "rxjs/operators";
import { DatosI } from '../interfaces/datos';

@Injectable({
  providedIn: 'root'
})
export class SensoresService {
  private sensoresCollection: AngularFirestoreCollection<DatosI>;
  private sensores:Observable<DatosI[]>;


  constructor(bd:AngularFirestore){
   
    this.sensoresCollection= bd.collection<DatosI>('sensores',ref=>ref.limit(13).orderBy('time','desc'));
    this.sensores = this.sensoresCollection.snapshotChanges().pipe(map(
      actions =>{
      return actions.map(a =>{
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id,...data};
      });
    }
   ));
 }


 //Obtiene todos los datos de la colección
  getSensores(){
		return this.sensores;
	}

  //Obtiene un solo dato de la colección
  //this.afs.collection('users'), ref => ref.limit(1).orderBy('date','desc')).valueChanges();
	
}
