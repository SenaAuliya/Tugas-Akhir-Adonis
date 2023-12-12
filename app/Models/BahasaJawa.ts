import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class BahasaJawa extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({})
  public indonesia: string
  @column({})

  public krama: string
  @column({})
  public ngoko: string



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
