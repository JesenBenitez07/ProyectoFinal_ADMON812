import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Reparaciones, ReparacionesRelations} from '../models';

export class ReparacionesRepository extends DefaultCrudRepository<
  Reparaciones,
  typeof Reparaciones.prototype.idReparacion,
  ReparacionesRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Reparaciones, dataSource);
  }
}
