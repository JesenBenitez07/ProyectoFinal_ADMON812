import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Reparaciones'}}})
export class Reparaciones extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: 0,
    id: 1,
    mssql: {columnName: 'IDReparacion', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  idReparacion: number;

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
    mssql: {columnName: 'FechaReparacion', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  fechaReparacion?: string;

  @property({
    type: 'string',
    length: 255,
    generated: 0,
    mssql: {columnName: 'Problema', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  problema?: string;

  @property({
    type: 'string',
    length: 255,
    generated: 0,
    mssql: {columnName: 'Solucion', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  solucion?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Reparaciones>) {
    super(data);
  }
}

export interface ReparacionesRelations {
  // describe navigational properties here
}

export type ReparacionesWithRelations = Reparaciones & ReparacionesRelations;
