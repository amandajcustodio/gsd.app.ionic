import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserProxy } from '../../models/proxies/user.proxy';
import { mockedUserProxy } from '../../models/mocks/user.mock';

@Component({
  selector: 'app-menu',
  template: `<footer
    class="flex align-items-center justify-content-around w-full h-4rem absolute bottom-0"
    style="background-color: var(--blue-100)"
  >
    <ion-icon
      size="large"
      (click)="navigateTo('/home')"
      name="home-outline"
    ></ion-icon>

    <ion-icon
      size="large"
      (click)="navigateTo('/profile')"
      name="person-outline"
    ></ion-icon>

    <a
      style="color: black"
      [href]="'https://api.whatsapp.com/send?phone=' + user[0].emergencyContact"
      ><ion-icon size="large" name="chatbubble-ellipses-outline"></ion-icon
    ></a>

    <a style="color: black" [href]="'tel:+55' + user[0].emergencyContact"
      ><ion-icon size="large" name="call-outline"></ion-icon
    ></a>
  </footer>`,
})
export class MenuComponent {
  constructor(private readonly router: Router) {}

  //#region Public Properties

  public user: UserProxy[] = mockedUserProxy;

  //#endregion

  //#region Public Methods

  public async navigateTo(route: string): Promise<void> {
    this.router.navigate([route]);
  }

  //#endregion
}
