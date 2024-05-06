//#region Imports

import { Injectable, Type } from '@angular/core';
import { ModalController } from '@ionic/angular';

//#endregion

interface CustomModalConfig {
  size?: 'fit' | 'large' | 'huge' | 'fullscreen';
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private readonly modalController: ModalController) {}

  //#region Pulic Methods

  public async open<T>(component: Type<T>, componentProps?: any): Promise<any> {
    const modal = await this.modalController.create({
      component: component,
      componentProps: componentProps,
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    return data;
  }

  public async close(): Promise<void> {
    const topModal = await this.modalController.getTop();
    if (topModal) {
      await topModal.dismiss();
    }
  }
  //#endregion
}
