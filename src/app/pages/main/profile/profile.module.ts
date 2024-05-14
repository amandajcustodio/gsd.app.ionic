import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { StatusHistoryCardModule } from '../../../components/status-history-card/status-history-card.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileRoutingModule,
    StatusHistoryCardModule,
  ],
  declarations: [
    ProfileComponent,
  ],
  exports: [
    ProfileComponent,
  ]
})
export class ProfileModule { }
