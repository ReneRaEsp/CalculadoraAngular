import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormularioComponent } from './calculadora/formulario/formulario.component';
import { ResultadoComponent } from './calculadora/resultado/resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    FormularioComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
