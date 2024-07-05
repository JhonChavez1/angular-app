import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CounterComponent, CommonModule, RouterOutlet]
})
export class AppComponent {
  title:    string = 'Hola mundo angular desde componente!!'; 
  subtitle: string = 'Contador con estado de sesión';
  users:    string[] = ['Pepe', 'Maria', 'Juan', 'Andres']; 
  visible:  boolean = false;
  counter: number = 0

  setVisible(): void {
    this.visible = this.visible? false: true;
    console.log('Hemos hecho clic en setVisible');
  }
}
setCounter(counter: number): void{
  this.counter = counter
}