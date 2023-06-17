import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Procesadores, ProcesadoresRelations} from '../models';

export class ProcesadoresRepository extends DefaultCrudRepository<
  Procesadores,
  typeof Procesadores.prototype.idProcesador,
  ProcesadoresRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Procesadores, dataSource);
  }
}
