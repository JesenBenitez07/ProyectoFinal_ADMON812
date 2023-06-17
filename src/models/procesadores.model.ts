import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Procesadores'}}})
export class Procesadores extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: 0,
    id: 1,
    mssql: {columnName: 'IDProcesador', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  idProcesador: number;

  @property({
    type: 'string',
    length: 50,
    generated: 0,
    mssql: {columnName: 'Modelo', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  modelo?: string;

  @property({
    type: 'string',
    length: 50,
    generated: 0,
    mssql: {columnName: 'Marca', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  marca?: string;

  @property({
    type: 'string',
    length: 50,
    generated: 0,
    mssql: {columnName: 'Generacion', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  generacion?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Procesadores>) {
    super(data);
  }
}

export interface ProcesadoresRelations {
  // describe navigational properties here
}

export type ProcesadoresWithRelations = Procesadores & ProcesadoresRelations;
