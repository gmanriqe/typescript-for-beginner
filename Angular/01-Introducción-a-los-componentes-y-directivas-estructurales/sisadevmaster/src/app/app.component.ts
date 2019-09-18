import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// Es aqui donde creo las variables, para luego pintarlas en el archivo: './app.component.html',
export class AppComponent {
  nombre = "Devmaster";
  apellido = "Peru";
}
