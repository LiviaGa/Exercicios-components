import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})
export class ControlComponent {
mesSelecionado:string ='um';
  mes:number[] = [1,2,3,4,5,6,7,8,9,10,11,12];


trocarMes(event:Event) : void{
  const elementoSelecionado = event.target as HTMLSelectElement;
  this.mesSelecionado = elementoSelecionado.value;

}

constructor(){

}

}
