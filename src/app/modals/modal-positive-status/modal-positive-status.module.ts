import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalPositiveStatusComponent } from './modal-positive-status.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    ModalPositiveStatusComponent,
  ],
  exports: [
    ModalPositiveStatusComponent,
  ]
})
export class ModalPositiveStatusModule { }
