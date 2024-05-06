import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';
import { ModalTurnAlarmOffModule } from '../../modals/modal-turn-alarm-off/modal-turn-alarm-off.module';
import { ModalService } from '../../services/modal/modal.service';
import { ModalController } from '@ionic/angular/standalone';
import { ModalPositiveStatusModule } from '../../modals/modal-positive-status/modal-positive-status.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalTurnAlarmOffModule,
    ModalPositiveStatusModule
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [
    ModalService,
    ModalController,
  ]
})
export class HeaderModule { }
