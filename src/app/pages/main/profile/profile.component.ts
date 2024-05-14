import { Component } from '@angular/core';
import { UserProxy } from '../../../models/proxies/user.proxy';
import { mockedUserProxy } from '../../../models/mocks/user.mock';

@Component({
  selector: 'app-profile',
  template: `
    <ion-content>
      <section class="relative text-center">
        <img
          class="w-7rem border-circle"
          [src]="user[0].imageUrl || 'assets/images/image-user-placeholder.jpg'"
          alt="GasSecure Defender Logo"
        />
        <section
          class="flex flex-column justify-content-center align-items-center gap-2 bg-white border-round-2xl pt-7 pb-5 translate"
        >
          <ion-list class="flex flex-column justify-content-center gap-5 align-items-center">
            <ion-item>
              <ion-input
                [(ngModel)]="user[0].name"
                label="Nome"
                labelPlacement="stacked"
                type="text"
                readonly="true"
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-input
                [(ngModel)]="user[0].cpf"
                label="CPF"
                labelPlacement="stacked"
                type="text"
                readonly="true"
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-input
                label="E-mail"
                labelPlacement="stacked"
                [(ngModel)]="user[0].email"
                type="text"
                readonly="true"
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-input
                [(ngModel)]="user[0].address"
                label="Endereço"
                labelPlacement="stacked"
                type="text"
                readonly="true"
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-input
                [(ngModel)]="user[0].phone"
                label="Número"
                labelPlacement="stacked"
                type="text"
                readonly="true"
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-input
                [(ngModel)]="user[0].emergencyContactName"
                label="Contato de emergência"
                labelPlacement="stacked"
                type="text"
                readonly="true"
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-input
                [(ngModel)]="user[0].emergencyContact"
                label="Número de emergência"
                labelPlacement="stacked"
                type="text"
                readonly="true"
              ></ion-input>
            </ion-item>
          </ion-list>
        </section>
      </section>
    </ion-content>
  `,
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  //#region Public Properties

  //#region Public Properties

  public user: UserProxy[] = mockedUserProxy;

  //#endregion

  //#endregion
}
