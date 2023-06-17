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
import {Procesadores} from '../models';
import {ProcesadoresRepository} from '../repositories';

export class ProcesadoresController {
  constructor(
    @repository(ProcesadoresRepository)
    public procesadoresRepository : ProcesadoresRepository,
  ) {}

  @post('/procesadores')
  @response(200, {
    description: 'Procesadores model instance',
    content: {'application/json': {schema: getModelSchemaRef(Procesadores)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Procesadores, {
            title: 'NewProcesadores',
            
          }),
        },
      },
    })
    procesadores: Procesadores,
  ): Promise<Procesadores> {
    return this.procesadoresRepository.create(procesadores);
  }

  @get('/procesadores/count')
  @response(200, {
    description: 'Procesadores model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Procesadores) where?: Where<Procesadores>,
  ): Promise<Count> {
    return this.procesadoresRepository.count(where);
  }

  @get('/procesadores')
  @response(200, {
    description: 'Array of Procesadores model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Procesadores, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Procesadores) filter?: Filter<Procesadores>,
  ): Promise<Procesadores[]> {
    return this.procesadoresRepository.find(filter);
  }

  @patch('/procesadores')
  @response(200, {
    description: 'Procesadores PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Procesadores, {partial: true}),
        },
      },
    })
    procesadores: Procesadores,
    @param.where(Procesadores) where?: Where<Procesadores>,
  ): Promise<Count> {
    return this.procesadoresRepository.updateAll(procesadores, where);
  }

  @get('/procesadores/{id}')
  @response(200, {
    description: 'Procesadores model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Procesadores, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Procesadores, {exclude: 'where'}) filter?: FilterExcludingWhere<Procesadores>
  ): Promise<Procesadores> {
    return this.procesadoresRepository.findById(id, filter);
  }

  @patch('/procesadores/{id}')
  @response(204, {
    description: 'Procesadores PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Procesadores, {partial: true}),
        },
      },
    })
    procesadores: Procesadores,
  ): Promise<void> {
    await this.procesadoresRepository.updateById(id, procesadores);
  }

  @put('/procesadores/{id}')
  @response(204, {
    description: 'Procesadores PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() procesadores: Procesadores,
  ): Promise<void> {
    await this.procesadoresRepository.replaceById(id, procesadores);
  }

  @del('/procesadores/{id}')
  @response(204, {
    description: 'Procesadores DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.procesadoresRepository.deleteById(id);
  }
}
