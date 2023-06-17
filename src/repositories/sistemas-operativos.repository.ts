import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {SistemasOperativos, SistemasOperativosRelations} from '../models';

export class SistemasOperativosRepository extends DefaultCrudRepository<
  SistemasOperativos,
  typeof SistemasOperativos.prototype.idSistemaOperativo,
  SistemasOperativosRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(SistemasOperativos, dataSource);
  }
}
