import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Mantenimientos'}}
})
export class Mantenimientos extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: 0,
    id: 1,
    mssql: {columnName: 'IDMantenimiento', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  idMantenimiento: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'IDComputadora', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  idComputadora?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'IDTecnico', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  idTecnico?: number;

  @property({
    type: 'date',
    generated: 0,
    mssql: {columnName: 'FechaMantenimiento', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  fechaMantenimiento?: string;

  @property({
    type: 'string',
    length: 255,
    generated: 0,
    mssql: {columnName: 'Descripcion', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  descripcion?: string;

  @property({
    type: 'boolean',
    generated: 0,
    mssql: {columnName: 'Realizado', dataType: 'bit', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  realizado?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Mantenimientos>) {
    super(data);
  }
}

export interface MantenimientosRelations {
  // describe navigational properties here
}

export type MantenimientosWithRelations = Mantenimientos & MantenimientosRelations;
