import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Computadoras, ComputadorasRelations} from '../models';

export class ComputadorasRepository extends DefaultCrudRepository<
  Computadoras,
  typeof Computadoras.prototype.idComputadora,
  ComputadorasRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Computadoras, dataSource);
  }
}
