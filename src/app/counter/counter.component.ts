import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {
  counter: number = 0;
  @Input() title!: string
  @Output() counterEmit: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
   this.counter = parseInt(localStorage.getItem('counter')!) || 0; 
        console.log('creando componente');
  }

  setCounter(): void{
    this.counter = this.counter + 1;
    localStorage.setItem('counter', this.counter.toString());
    this.counterEmit.emit(parseInt(localStorage.getItem('counter')!));
  }
}
