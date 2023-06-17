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
import {Reparaciones} from '../models';
import {ReparacionesRepository} from '../repositories';

export class ReparacionesController {
  constructor(
    @repository(ReparacionesRepository)
    public reparacionesRepository : ReparacionesRepository,
  ) {}

  @post('/reparaciones')
  @response(200, {
    description: 'Reparaciones model instance',
    content: {'application/json': {schema: getModelSchemaRef(Reparaciones)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reparaciones, {
            title: 'NewReparaciones',
            
          }),
        },
      },
    })
    reparaciones: Reparaciones,
  ): Promise<Reparaciones> {
    return this.reparacionesRepository.create(reparaciones);
  }

  @get('/reparaciones/count')
  @response(200, {
    description: 'Reparaciones model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Reparaciones) where?: Where<Reparaciones>,
  ): Promise<Count> {
    return this.reparacionesRepository.count(where);
  }

  @get('/reparaciones')
  @response(200, {
    description: 'Array of Reparaciones model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Reparaciones, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Reparaciones) filter?: Filter<Reparaciones>,
  ): Promise<Reparaciones[]> {
    return this.reparacionesRepository.find(filter);
  }

  @patch('/reparaciones')
  @response(200, {
    description: 'Reparaciones PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reparaciones, {partial: true}),
        },
      },
    })
    reparaciones: Reparaciones,
    @param.where(Reparaciones) where?: Where<Reparaciones>,
  ): Promise<Count> {
    return this.reparacionesRepository.updateAll(reparaciones, where);
  }

  @get('/reparaciones/{id}')
  @response(200, {
    description: 'Reparaciones model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Reparaciones, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Reparaciones, {exclude: 'where'}) filter?: FilterExcludingWhere<Reparaciones>
  ): Promise<Reparaciones> {
    return this.reparacionesRepository.findById(id, filter);
  }

  @patch('/reparaciones/{id}')
  @response(204, {
    description: 'Reparaciones PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reparaciones, {partial: true}),
        },
      },
    })
    reparaciones: Reparaciones,
  ): Promise<void> {
    await this.reparacionesRepository.updateById(id, reparaciones);
  }

  @put('/reparaciones/{id}')
  @response(204, {
    description: 'Reparaciones PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() reparaciones: Reparaciones,
  ): Promise<void> {
    await this.reparacionesRepository.replaceById(id, reparaciones);
  }

  @del('/reparaciones/{id}')
  @response(204, {
    description: 'Reparaciones DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.reparacionesRepository.deleteById(id);
  }
}
