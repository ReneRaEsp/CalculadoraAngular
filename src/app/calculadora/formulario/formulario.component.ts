import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass']
})
export class FormularioComponent implements OnInit {
  @Output() resultadoOperacion = new EventEmitter<number>();

  operandoA:number;
  operandoB:number;
  resultado:number;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSumar():void{
    let resultado = this.operandoA + this.operandoB;
    this.resultadoOperacion.emit(resultado);
  
  }

  onRestar():void{
    let resultado = this.operandoA - this.operandoB;
    this.resultadoOperacion.emit(resultado);
   
  }

  onMultiplicar():void{
   let resultado = this.operandoA * this.operandoB;
   this.resultadoOperacion.emit(resultado);
   
  }

  onDivision():void{
    let resultado = this.operandoA / this.operandoB;
    this.resultadoOperacion.emit(resultado);
  }
  

}
