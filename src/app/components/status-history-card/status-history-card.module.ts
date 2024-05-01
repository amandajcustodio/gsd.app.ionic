import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StatusHistoryCardComponent } from './status-history-card.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    StatusHistoryCardComponent,
  ],
  exports: [
    StatusHistoryCardComponent,
  ]
})
export class StatusHistoryCardModule { }
