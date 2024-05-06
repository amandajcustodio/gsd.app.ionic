import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-turn-alarm-off',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Desligar Alarme</ion-title>
      </ion-toolbar></ion-header
    >
    <div class="flex flex-column gap-4 justify-content-center px-3 h-full">
      <h3 class="flex align-items-center gap-3 text-left">
        <ion-icon class="w-4rem h-4rem" name="notifications-outline"></ion-icon>
        O alarme está ligado, tem certeza que deseja desliga-lo?
      </h3>

      <div class="flex justify-content-between align-items-center">
        <ion-button class="border-round-xl" style="--background: #0da7cb;" (click)="close()"
          >Cancelar</ion-button
        >
        <ion-button class="border-round-xl" style="--background: #bcc3cd;" (click)="submit()">Desligar</ion-button>
      </div>
    </div>
  `,
})
export class ModalTurnAlarmOffComponent {
  //#region Constructor

  constructor(private modalController: ModalController) {}

  //#endregion

  //#region Public Methods

  public async submit(): Promise<void> {
    await this.modalController.dismiss(true);
  }

  public async close(): Promise<void> {
    await this.modalController.dismiss();
  }

  //#endregion
}
