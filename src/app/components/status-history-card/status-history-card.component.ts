import { Component, Input } from '@angular/core';
import { LeakHistoryProxy } from '../../models/proxies/leak-history.proxy';
import { LeakLevelEnum } from '../../models/enums/leak-level.enum';

@Component({
  selector: 'app-status-history-card',
  template: `
    <div
      class="flex flex-column align-items-start justify-content-between bg-white w-full p-2 min-h-5rem mb-3 select-none"
    >
      <p>
        <b>Data do registro: {{ history.date | date : 'dd/MM/yyyy' }}</b>
      </p>

      <div class="flex align-items-center gap-2">
        <p>Nível registrado:</p>
        <span
          class="flex align-items-center py-1 px-4 border-round-3xl"
          [style]="{ 'background-color': color, height: 'min-content' }"
          >{{ history.level }}</span
        >
      </div>
    </div>
  `,
})
export class StatusHistoryCardComponent {
  constructor() {}

  @Input({ required: true })
  public history!: LeakHistoryProxy;

  public get color(): string {
    switch (this.history.level) {
      case LeakLevelEnum.NULL:
        return '#d0e1fd';
      case LeakLevelEnum.LIGHT:
        return '#ffc90e';
      case LeakLevelEnum.MODERATE:
        return '#ff7f27';
      case LeakLevelEnum.HIGH:
        return '#ed1c24';
      default:
        return '#9fa9b7';
    }
  }
}
