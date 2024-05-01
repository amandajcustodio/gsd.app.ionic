import { Component } from '@angular/core';
import { LeakHistoryProxy } from '../../../models/proxies/leak-history.proxy';
import { mockedLeakHistoryProxy } from '../../../models/mocks/leak-history.mock';

@Component({
  selector: 'app-home',
  template: `
    <ion-content>
      <ng-container *ngFor="let card of cards | slice: 0 : sliceIndex">
        <app-status-history-card [history]="card"></app-status-history-card>
      </ng-container>
      <div class="flex align-items-center justify-content-end">
        <span (click)="changeSliceIndex()">{{ sliceIndex == 2 ? 'Ver Mais' : 'Ver Menos'}}</span>
      </div>
    </ion-content>
  `,
})
export class HomeComponent {
  //#region Public Properties

  public cards: LeakHistoryProxy[] = mockedLeakHistoryProxy;

  public sliceIndex: number = 2;

  //#endregion

  //#region Public Methods

  public changeSliceIndex(): void {
    if (this.sliceIndex !== 2) {
      this.sliceIndex = 2;
      return;
    }

    this.sliceIndex = this.cards.length;
  }

  //#endregion
}
