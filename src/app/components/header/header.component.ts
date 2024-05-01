import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="flex align-items-center pl-4">
      <img
        class="w-3rem h-3rem"
        src="assets/images/logo.png"
        alt="GasSecure Defender Logo">
      <h1 class="">GasSecure Defender</h1>
    </div>
  `
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
