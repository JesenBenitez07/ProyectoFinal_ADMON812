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
import {ProximosMantenimientos} from '../models';
import {ProximosMantenimientosRepository} from '../repositories';

export class ProximosMantenimientosController {
  constructor(
    @repository(ProximosMantenimientosRepository)
    public proximosMantenimientosRepository : ProximosMantenimientosRepository,
  ) {}

  @post('/proximos-mantenimientos')
  @response(200, {
    description: 'ProximosMantenimientos model instance',
    content: {'application/json': {schema: getModelSchemaRef(ProximosMantenimientos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProximosMantenimientos, {
            title: 'NewProximosMantenimientos',
            
          }),
        },
      },
    })
    proximosMantenimientos: ProximosMantenimientos,
  ): Promise<ProximosMantenimientos> {
    return this.proximosMantenimientosRepository.create(proximosMantenimientos);
  }

  @get('/proximos-mantenimientos/count')
  @response(200, {
    description: 'ProximosMantenimientos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ProximosMantenimientos) where?: Where<ProximosMantenimientos>,
  ): Promise<Count> {
    return this.proximosMantenimientosRepository.count(where);
  }

  @get('/proximos-mantenimientos')
  @response(200, {
    description: 'Array of ProximosMantenimientos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ProximosMantenimientos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ProximosMantenimientos) filter?: Filter<ProximosMantenimientos>,
  ): Promise<ProximosMantenimientos[]> {
    return this.proximosMantenimientosRepository.find(filter);
  }

  @patch('/proximos-mantenimientos')
  @response(200, {
    description: 'ProximosMantenimientos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProximosMantenimientos, {partial: true}),
        },
      },
    })
    proximosMantenimientos: ProximosMantenimientos,
    @param.where(ProximosMantenimientos) where?: Where<ProximosMantenimientos>,
  ): Promise<Count> {
    return this.proximosMantenimientosRepository.updateAll(proximosMantenimientos, where);
  }

  @get('/proximos-mantenimientos/{id}')
  @response(200, {
    description: 'ProximosMantenimientos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ProximosMantenimientos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ProximosMantenimientos, {exclude: 'where'}) filter?: FilterExcludingWhere<ProximosMantenimientos>
  ): Promise<ProximosMantenimientos> {
    return this.proximosMantenimientosRepository.findById(id, filter);
  }

  @patch('/proximos-mantenimientos/{id}')
  @response(204, {
    description: 'ProximosMantenimientos PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProximosMantenimientos, {partial: true}),
        },
      },
    })
    proximosMantenimientos: ProximosMantenimientos,
  ): Promise<void> {
    await this.proximosMantenimientosRepository.updateById(id, proximosMantenimientos);
  }

  @put('/proximos-mantenimientos/{id}')
  @response(204, {
    description: 'ProximosMantenimientos PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() proximosMantenimientos: ProximosMantenimientos,
  ): Promise<void> {
    await this.proximosMantenimientosRepository.replaceById(id, proximosMantenimientos);
  }

  @del('/proximos-mantenimientos/{id}')
  @response(204, {
    description: 'ProximosMantenimientos DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.proximosMantenimientosRepository.deleteById(id);
  }
}
