import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

const MatComponents = [
  MatButtonModule,
  MatToolbarModule
]

@NgModule({
  imports: [
    MatComponents
  ],
  exports: [
    MatComponents
  ]
})
export class MaterialsModule { }
