import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CpfPipe} from './pipe/cpf.pipe';
import { NumeroPipe } from './pipe/numero-pipe.pipe';



@NgModule({
  declarations: [CpfPipe, NumeroPipe],
  imports: [
    CommonModule
  ],
  exports: [
    CpfPipe,
    NumeroPipe
  ]
})
export class PipesModule { }
