import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlertModalComponent } from './alert-modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    AlertModalComponent,
  ],
  exports: [
    AlertModalComponent,
  ]
})
export class AlertModalModule { }
