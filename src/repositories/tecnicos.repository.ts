import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Tecnicos, TecnicosRelations} from '../models';

export class TecnicosRepository extends DefaultCrudRepository<
  Tecnicos,
  typeof Tecnicos.prototype.idTecnico,
  TecnicosRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Tecnicos, dataSource);
  }
}
