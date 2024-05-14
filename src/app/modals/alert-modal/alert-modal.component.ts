import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  template: `<div
    class="relative flex flex-column align-items-center justify-content-center gap-3 bg-red-600 text-white"
    [style.height.vh]="100"
  >
    <div class="absolute top-0 right-0 mr-4 mt-4">
      <ion-icon class="text-5xl" name="close-outline"> </ion-icon>
    </div>
    <div class="my-0">
      <ion-icon style="font-size: 10rem" name="warning-outline"> </ion-icon>
    </div>
    <div class="text-center font-medium">
      <h1 class="my-0 text-4xl font-bold">Atenção!</h1>
      <p class="my-3 text-lg">Alta taxa de vazamento de gás.</p>
    </div>
  </div>`,
})
export class AlertModalComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
