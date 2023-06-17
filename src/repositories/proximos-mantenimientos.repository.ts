import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {ProximosMantenimientos, ProximosMantenimientosRelations} from '../models';

export class ProximosMantenimientosRepository extends DefaultCrudRepository<
  ProximosMantenimientos,
  typeof ProximosMantenimientos.prototype.idProximoMantenimiento,
  ProximosMantenimientosRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(ProximosMantenimientos, dataSource);
  }
}
