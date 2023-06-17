import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {SistemasOperativos} from '../models';
import {SistemasOperativosRepository} from '../repositories';

export class SistemasOperativosController {
  constructor(
    @repository(SistemasOperativosRepository)
    public sistemasOperativosRepository : SistemasOperativosRepository,
  ) {}

  @post('/sistemas-operativos')
  @response(200, {
    description: 'SistemasOperativos model instance',
    content: {'application/json': {schema: getModelSchemaRef(SistemasOperativos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SistemasOperativos, {
            title: 'NewSistemasOperativos',
            
          }),
        },
      },
    })
    sistemasOperativos: SistemasOperativos,
  ): Promise<SistemasOperativos> {
    return this.sistemasOperativosRepository.create(sistemasOperativos);
  }

  @get('/sistemas-operativos/count')
  @response(200, {
    description: 'SistemasOperativos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(SistemasOperativos) where?: Where<SistemasOperativos>,
  ): Promise<Count> {
    return this.sistemasOperativosRepository.count(where);
  }

  @get('/sistemas-operativos')
  @response(200, {
    description: 'Array of SistemasOperativos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(SistemasOperativos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(SistemasOperativos) filter?: Filter<SistemasOperativos>,
  ): Promise<SistemasOperativos[]> {
    return this.sistemasOperativosRepository.find(filter);
  }

  @patch('/sistemas-operativos')
  @response(200, {
    description: 'SistemasOperativos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SistemasOperativos, {partial: true}),
        },
      },
    })
    sistemasOperativos: SistemasOperativos,
    @param.where(SistemasOperativos) where?: Where<SistemasOperativos>,
  ): Promise<Count> {
    return this.sistemasOperativosRepository.updateAll(sistemasOperativos, where);
  }

  @get('/sistemas-operativos/{id}')
  @response(200, {
    description: 'SistemasOperativos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(SistemasOperativos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SistemasOperativos, {exclude: 'where'}) filter?: FilterExcludingWhere<SistemasOperativos>
  ): Promise<SistemasOperativos> {
    return this.sistemasOperativosRepository.findById(id, filter);
  }

  @patch('/sistemas-operativos/{id}')
  @response(204, {
    description: 'SistemasOperativos PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SistemasOperativos, {partial: true}),
        },
      },
    })
    sistemasOperativos: SistemasOperativos,
  ): Promise<void> {
    await this.sistemasOperativosRepository.updateById(id, sistemasOperativos);
  }

  @put('/sistemas-operativos/{id}')
  @response(204, {
    description: 'SistemasOperativos PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() sistemasOperativos: SistemasOperativos,
  ): Promise<void> {
    await this.sistemasOperativosRepository.replaceById(id, sistemasOperativos);
  }

  @del('/sistemas-operativos/{id}')
  @response(204, {
    description: 'SistemasOperativos DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.sistemasOperativosRepository.deleteById(id);
  }
}
