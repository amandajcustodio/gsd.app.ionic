import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-positive-status',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Tudo certo!</ion-title>
      </ion-toolbar></ion-header
    >
    <div
      class="flex flex-column gap-4 justify-content-center align-items-center px-3 h-full"
    >
      <div class="flex flex-column align-items-center gap-2">
        <ion-icon class="w-5rem h-5rem text-teal-700" name="checkmark-circle">
        </ion-icon>
        <p class="text-2xl text-center text-800">
          Está tudo certo por aqui, mas fique atento(a), avisaremos se algo
          acontecer!
        </p>
      </div>

      <ion-button
        class="w-full border-round-xl"
        style="--background: #0da7cb;"
        (click)="close()"
        >Fechar</ion-button
      >
    </div>
  `,
})
export class ModalPositiveStatusComponent {
  //#region Constructor

  constructor(private modalController: ModalController) {}

  //#endregion

  //#region Public Methods

  public async close(): Promise<void> {
    await this.modalController.dismiss();
  }

  //#endregion
}
