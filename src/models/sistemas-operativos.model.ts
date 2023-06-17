import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'SistemasOperativos'}}
})
export class SistemasOperativos extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: 0,
    id: 1,
    mssql: {columnName: 'IDSistemaOperativo', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 0},
  })
  idSistemaOperativo: number;

  @property({
    type: 'string',
    length: 50,
    generated: 0,
    mssql: {columnName: 'Nombre', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  nombre?: string;

  @property({
    type: 'string',
    length: 50,
    generated: 0,
    mssql: {columnName: 'Arquitectura', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: 0},
  })
  arquitectura?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SistemasOperativos>) {
    super(data);
  }
}

export interface SistemasOperativosRelations {
  // describe navigational properties here
}

export type SistemasOperativosWithRelations = SistemasOperativos & SistemasOperativosRelations;
