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
import {Mantenimientos} from '../models';
import {MantenimientosRepository} from '../repositories';

export class MantenimientosController {
  constructor(
    @repository(MantenimientosRepository)
    public mantenimientosRepository : MantenimientosRepository,
  ) {}

  @post('/mantenimientos')
  @response(200, {
    description: 'Mantenimientos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Mantenimientos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mantenimientos, {
            title: 'NewMantenimientos',
            
          }),
        },
      },
    })
    mantenimientos: Mantenimientos,
  ): Promise<Mantenimientos> {
    return this.mantenimientosRepository.create(mantenimientos);
  }

  @get('/mantenimientos/count')
  @response(200, {
    description: 'Mantenimientos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Mantenimientos) where?: Where<Mantenimientos>,
  ): Promise<Count> {
    return this.mantenimientosRepository.count(where);
  }

  @get('/mantenimientos')
  @response(200, {
    description: 'Array of Mantenimientos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Mantenimientos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Mantenimientos) filter?: Filter<Mantenimientos>,
  ): Promise<Mantenimientos[]> {
    return this.mantenimientosRepository.find(filter);
  }

  @patch('/mantenimientos')
  @response(200, {
    description: 'Mantenimientos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mantenimientos, {partial: true}),
        },
      },
    })
    mantenimientos: Mantenimientos,
    @param.where(Mantenimientos) where?: Where<Mantenimientos>,
  ): Promise<Count> {
    return this.mantenimientosRepository.updateAll(mantenimientos, where);
  }

  @get('/mantenimientos/{id}')
  @response(200, {
    description: 'Mantenimientos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Mantenimientos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Mantenimientos, {exclude: 'where'}) filter?: FilterExcludingWhere<Mantenimientos>
  ): Promise<Mantenimientos> {
    return this.mantenimientosRepository.findById(id, filter);
  }

  @patch('/mantenimientos/{id}')
  @response(204, {
    description: 'Mantenimientos PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mantenimientos, {partial: true}),
        },
      },
    })
    mantenimientos: Mantenimientos,
  ): Promise<void> {
    await this.mantenimientosRepository.updateById(id, mantenimientos);
  }

  @put('/mantenimientos/{id}')
  @response(204, {
    description: 'Mantenimientos PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() mantenimientos: Mantenimientos,
  ): Promise<void> {
    await this.mantenimientosRepository.replaceById(id, mantenimientos);
  }

  @del('/mantenimientos/{id}')
  @response(204, {
    description: 'Mantenimientos DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.mantenimientosRepository.deleteById(id);
  }
}
