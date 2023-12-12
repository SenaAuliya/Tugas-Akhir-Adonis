import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class BahasaIndonesia extends BaseModel {
  @column({ isPrimary: true })
  public id: number;
  @column({})
  public title: string;
  @column({})
  public content: string;s
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
