import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Computadoras'}}})
export class Computadoras extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: 0,
    id: 1,
    mssql: {columnName: 'IDComputadora', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  idComputadora: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'IDCliente', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  idCliente?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'IDProcesador', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  idProcesador?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'IDSistemaOperativo', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  idSistemaOperativo?: number;

  @property({
    type: 'string',
    length: 50,
    generated: 0,
    mssql: {columnName: 'Service_Tag', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  serviceTag?: string;

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
    type: 'date',
    generated: 0,
    mssql: {columnName: 'FechaAdquisicion', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  fechaAdquisicion?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'Memoria_RAM', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  memoriaRam?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: 0,
    mssql: {columnName: 'Disco_Duro', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: 0},
  })
  discoDuro?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Computadoras>) {
    super(data);
  }
}

export interface ComputadorasRelations {
  // describe navigational properties here
}

export type ComputadorasWithRelations = Computadoras & ComputadorasRelations;
