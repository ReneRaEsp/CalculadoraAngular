import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.sass']
})
export class CalculadoraComponent implements OnInit {
  

  constructor() { }

  resultado: number;

  onResultado(resultado: number){
		this.resultado = resultado;

  }

  ngOnInit(): void {
  }


}
