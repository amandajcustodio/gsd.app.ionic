import { Component, OnInit } from '@angular/core';
import { LeakHistoryProxy } from '../../../models/proxies/leak-history.proxy';
import { mockedLeakHistoryProxy } from '../../../models/mocks/leak-history.mock';
import { AlertModalComponent } from '../../../modals/alert-modal/alert-modal.component';
import { ModalService } from '../../../services/modal/modal.service';

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
export class HomeComponent implements OnInit {
  //#region Constructor

  constructor(
    private readonly modalService: ModalService
  ) {}

  //#endregion

  //#region Public Properties

  public cards: LeakHistoryProxy[] = mockedLeakHistoryProxy;

  public sliceIndex: number = 2;

  public showAlert: boolean = true;

  //#endregion

  //#region Public Methods

  public ngOnInit(): void {
    if (this.showAlert)
      this.openModal();
  }

  public changeSliceIndex(): void {
    if (this.sliceIndex !== 2) {
      this.sliceIndex = 2;
      return;
    }

    this.sliceIndex = this.cards.length;
  }

  public async openModal(): Promise<void> {
    const resultado = await this.modalService.open(
      AlertModalComponent,
      {}
    );
  }
  //#endregion
}
