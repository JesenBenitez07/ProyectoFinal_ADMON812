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
import {Tecnicos} from '../models';
import {TecnicosRepository} from '../repositories';

export class TecnicosController {
  constructor(
    @repository(TecnicosRepository)
    public tecnicosRepository : TecnicosRepository,
  ) {}

  @post('/tecnicos')
  @response(200, {
    description: 'Tecnicos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tecnicos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tecnicos, {
            title: 'NewTecnicos',
            
          }),
        },
      },
    })
    tecnicos: Tecnicos,
  ): Promise<Tecnicos> {
    return this.tecnicosRepository.create(tecnicos);
  }

  @get('/tecnicos/count')
  @response(200, {
    description: 'Tecnicos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tecnicos) where?: Where<Tecnicos>,
  ): Promise<Count> {
    return this.tecnicosRepository.count(where);
  }

  @get('/tecnicos')
  @response(200, {
    description: 'Array of Tecnicos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tecnicos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tecnicos) filter?: Filter<Tecnicos>,
  ): Promise<Tecnicos[]> {
    return this.tecnicosRepository.find(filter);
  }

  @patch('/tecnicos')
  @response(200, {
    description: 'Tecnicos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tecnicos, {partial: true}),
        },
      },
    })
    tecnicos: Tecnicos,
    @param.where(Tecnicos) where?: Where<Tecnicos>,
  ): Promise<Count> {
    return this.tecnicosRepository.updateAll(tecnicos, where);
  }

  @get('/tecnicos/{id}')
  @response(200, {
    description: 'Tecnicos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tecnicos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tecnicos, {exclude: 'where'}) filter?: FilterExcludingWhere<Tecnicos>
  ): Promise<Tecnicos> {
    return this.tecnicosRepository.findById(id, filter);
  }

  @patch('/tecnicos/{id}')
  @response(204, {
    description: 'Tecnicos PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tecnicos, {partial: true}),
        },
      },
    })
    tecnicos: Tecnicos,
  ): Promise<void> {
    await this.tecnicosRepository.updateById(id, tecnicos);
  }

  @put('/tecnicos/{id}')
  @response(204, {
    description: 'Tecnicos PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tecnicos: Tecnicos,
  ): Promise<void> {
    await this.tecnicosRepository.replaceById(id, tecnicos);
  }

  @del('/tecnicos/{id}')
  @response(204, {
    description: 'Tecnicos DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tecnicosRepository.deleteById(id);
  }
}
