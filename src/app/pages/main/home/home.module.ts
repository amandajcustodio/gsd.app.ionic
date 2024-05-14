import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { StatusHistoryCardModule } from '../../../components/status-history-card/status-history-card.module';
import { FusionChartsModule } from "angular-fusioncharts";
import { AlertModalModule } from '../../../modals/alert-modal/alert-modal.module';
import { ModalService } from '../../../services/modal/modal.service';
import { ModalController } from '@ionic/angular/standalone';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule,
    StatusHistoryCardModule,
    AlertModalModule
  ],
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent,
  ],
  providers: [
    ModalService,
    ModalController,
  ]
})
export class HomeModule { }
