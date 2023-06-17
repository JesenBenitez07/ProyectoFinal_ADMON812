import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Mantenimientos, MantenimientosRelations} from '../models';

export class MantenimientosRepository extends DefaultCrudRepository<
  Mantenimientos,
  typeof Mantenimientos.prototype.idMantenimiento,
  MantenimientosRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Mantenimientos, dataSource);
  }
}
