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
import {Computadoras} from '../models';
import {ComputadorasRepository} from '../repositories';

export class ComputadorasController {
  constructor(
    @repository(ComputadorasRepository)
    public computadorasRepository : ComputadorasRepository,
  ) {}

  @post('/computadoras')
  @response(200, {
    description: 'Computadoras model instance',
    content: {'application/json': {schema: getModelSchemaRef(Computadoras)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Computadoras, {
            title: 'NewComputadoras',
            
          }),
        },
      },
    })
    computadoras: Computadoras,
  ): Promise<Computadoras> {
    return this.computadorasRepository.create(computadoras);
  }

  @get('/computadoras/count')
  @response(200, {
    description: 'Computadoras model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Computadoras) where?: Where<Computadoras>,
  ): Promise<Count> {
    return this.computadorasRepository.count(where);
  }

  @get('/computadoras')
  @response(200, {
    description: 'Array of Computadoras model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Computadoras, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Computadoras) filter?: Filter<Computadoras>,
  ): Promise<Computadoras[]> {
    return this.computadorasRepository.find(filter);
  }

  @patch('/computadoras')
  @response(200, {
    description: 'Computadoras PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Computadoras, {partial: true}),
        },
      },
    })
    computadoras: Computadoras,
    @param.where(Computadoras) where?: Where<Computadoras>,
  ): Promise<Count> {
    return this.computadorasRepository.updateAll(computadoras, where);
  }

  @get('/computadoras/{id}')
  @response(200, {
    description: 'Computadoras model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Computadoras, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Computadoras, {exclude: 'where'}) filter?: FilterExcludingWhere<Computadoras>
  ): Promise<Computadoras> {
    return this.computadorasRepository.findById(id, filter);
  }

  @patch('/computadoras/{id}')
  @response(204, {
    description: 'Computadoras PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Computadoras, {partial: true}),
        },
      },
    })
    computadoras: Computadoras,
  ): Promise<void> {
    await this.computadorasRepository.updateById(id, computadoras);
  }

  @put('/computadoras/{id}')
  @response(204, {
    description: 'Computadoras PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() computadoras: Computadoras,
  ): Promise<void> {
    await this.computadorasRepository.replaceById(id, computadoras);
  }

  @del('/computadoras/{id}')
  @response(204, {
    description: 'Computadoras DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.computadorasRepository.deleteById(id);
  }
}
