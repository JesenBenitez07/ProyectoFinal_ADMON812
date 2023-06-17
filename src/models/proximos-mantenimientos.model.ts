import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'ProximosMantenimientos'}}
})
export class ProximosMantenimientos extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: 0,
    id: 1,
    mssql: {columnName: 'IDProximoMantenimiento', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  idProximoMantenimiento: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'IDMantenimiento', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  idMantenimiento?: number;

  @property({
    type: 'date',
    generated: 0,
    mssql: {columnName: 'FechaProximoMantenimiento', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  fechaProximoMantenimiento?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ProximosMantenimientos>) {
    super(data);
  }
}

export interface ProximosMantenimientosRelations {
  // describe navigational properties here
}

export type ProximosMantenimientosWithRelations = ProximosMantenimientos & ProximosMantenimientosRelations;
