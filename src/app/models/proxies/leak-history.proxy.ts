import { LeakLevelEnum } from "../enums/leak-level.enum";

export interface LeakHistoryProxy {
  date: Date;
  level: LeakLevelEnum;
}
