import { Component } from '@angular/core';
import { ModalTurnAlarmOffComponent } from '../../modals/modal-turn-alarm-off/modal-turn-alarm-off.component';
import { ModalService } from '../../services/modal/modal.service';
import { ModalPositiveStatusComponent } from '../../modals/modal-positive-status/modal-positive-status.component';

@Component({
  selector: 'app-header',
  template: `
    <div class="flex align-items-center justify-content-around">
      <div class="flex align-items-center">
        <img
          class="mt-1 w-3rem h-3rem"
          src="assets/images/logo.png"
          alt="GasSecure Defender Logo"
        />
        <h1>GasSecure Defender</h1>
      </div>
      <ion-icon
        (click)="openModal()"
        class="w-2rem h-2rem mt-2 mr-2"
        name="notifications-outline"
      ></ion-icon>
    </div>
  `,
})
export class HeaderComponent {
  //#region Constructor

  constructor(
    private readonly modalService: ModalService
  ) {}

  //#endregion

  //#region Public Properties

  public isAlertOn: boolean = false;

  //#endregion

  //#region Public Methods

  public async openModal(): Promise<void> {
    const modal: any = this.isAlertOn ? ModalTurnAlarmOffComponent : ModalPositiveStatusComponent
    const resultado = await this.modalService.open(
      modal,
      {}
    );

    // #TODO: Adicionar implementação com o Arduino
  }

  //#endregion
}
