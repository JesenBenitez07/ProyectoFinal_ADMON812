import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Tecnicos'}}})
export class Tecnicos extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: 0,
    id: 1,
    mssql: {columnName: 'IDTecnico', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  idTecnico: number;

  @property({
    type: 'string',
    length: 50,
    generated: 0,
    mssql: {columnName: 'NombreTecnico', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  nombreTecnico?: string;

  @property({
    type: 'string',
    length: 50,
    generated: 0,
    mssql: {columnName: 'Puesto', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  puesto?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'Telefono', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  telefono?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Tecnicos>) {
    super(data);
  }
}

export interface TecnicosRelations {
  // describe navigational properties here
}

export type TecnicosWithRelations = Tecnicos & TecnicosRelations;
