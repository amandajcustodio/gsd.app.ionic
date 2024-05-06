import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalTurnAlarmOffComponent } from './modal-turn-alarm-off.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    ModalTurnAlarmOffComponent,
  ],
  exports: [
    ModalTurnAlarmOffComponent,
  ]
})
export class ModalTurnAlarmOffModule { }
