import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Camila Cortes Niño';
  correo = 'mariac.cortesn@unilibrebog.edu.co';
  Quimicos: any = [
    {nombre: 'Nombre elemento', simbolo: 'Simbolo', numero : 'Numero atomico', peso: 'Peso atomico', metal: 3},
    {nombre: 'Hidrogeno', simbolo: 'H', numero : 1, peso: 1.00794, metal: 1, categoria: 'noble'},
    {nombre: 'Helio', simbolo: 'He', numero : 2, peso: 4.002602, metal: 2, categoria: 'noble'},
    {nombre: 'Litio', simbolo: 'Li', numero : 3, peso: 6.94, metal: 1, categoria: 'alcalino'},
    {nombre: 'Argón', simbolo: 'Ar', numero : 18, peso: 39.948, metal: 2, categoria: 'noble' },
    {nombre: 'Potasio', simbolo: 'K', numero : 19, peso: 9.0983, metal: 1, categoria: 'alcalino'},
    {nombre: 'Neón', simbolo: 'Ne', numero : 10, peso: 20.179, metal: 1, categoria: 'noble'},
    {nombre: 'Xenón', simbolo: 'Xe', numero : 54, peso: 131.293, metal: 2, categoria: 'noble'},
    {nombre: 'Rubidio', simbolo: 'Rb', numero : 37, peso: 	85.4678, metal: 2, categoria: 'alcalino'},
    {nombre: 'Radón	', simbolo: 'Rn', numero : 86, peso: 222.0176, metal: 1, categoria: 'noble'},
  ]
}