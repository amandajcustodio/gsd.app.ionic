
import { LeakLevelEnum } from '../enums/leak-level.enum';
import { LeakHistoryProxy } from '../proxies/leak-history.proxy';

export const mockedLeakHistoryProxy: LeakHistoryProxy[] = [
  {
    date: new Date('May 21, 2024'),
    level: LeakLevelEnum.NULL,
  },
  {
    date: new Date('May 22, 2024'),
    level: LeakLevelEnum.NULL,
  },
  {
    date: new Date('May 23, 2024'),
    level: LeakLevelEnum.LIGHT,
  },
  {
    date: new Date('May 24, 2024'),
    level: LeakLevelEnum.LIGHT,
  },
  {
    date: new Date('May 25, 2024'),
    level: LeakLevelEnum.MODERATE,
  },
  {
    date: new Date('May 26, 2024'),
    level: LeakLevelEnum.HIGH,
  },
];
