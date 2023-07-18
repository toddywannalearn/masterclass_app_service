import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { ExerciseService } from './exercise.service';

/** [Controllers] are responsible for handling incoming requests and returning responses to the client.
 * A controller's purpose is to receive specific requests for the application. The routing mechanism controls which controller receives which requests.
 * Frequently, each controller has more than one route, and different routes can perform different actions.
 * In order to create a basic controller, we use classes and decorators.
 * Decorators associate classes with required metadata and enable Nest to create a routing map (tie requests to the corresponding controllers).
 * @see [Controllers](https://docs.nestjs.com/controllers)
 */

/** The ( @UseGuards ) decorator is used to set the stablished guard validator on the route. It can be used in a method/route scope, in a Controller scope affecting all the methods inside or in a global scope */
@UseGuards(AuthGuard)
@Controller('exercise')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Post()
  create(@Body() createExerciseDto: Prisma.ExerciseCreateInput) {
    return this.exerciseService.create(createExerciseDto);
  }

  @Get()
  findAll() {
    return this.exerciseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exerciseService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExerciseDto: Prisma.ExerciseUpdateInput,
  ) {
    return this.exerciseService.update(+id, updateExerciseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exerciseService.remove(+id);
  }
}
