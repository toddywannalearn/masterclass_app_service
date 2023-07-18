/* eslint-disable prettier/prettier */
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
import { ExerciseCategoryService } from './exercise-category.service';

@UseGuards(AuthGuard)
@Controller('exercise-category')
export class ExerciseCategoryController {
  constructor(
    private readonly exerciseCategoryService: ExerciseCategoryService,
  ) {}

  @Post()
  create(
    @Body() createExerciseCategoryDto: Prisma.ExerciseCategoryCreateInput,
  ) {
    return this.exerciseCategoryService.create(createExerciseCategoryDto);
  }

  @Get()
  findAll() {
    return this.exerciseCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exerciseCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExerciseCategoryDto: Prisma.ExerciseCategoryUpdateInput,
  ) {
    return this.exerciseCategoryService.update(+id, updateExerciseCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exerciseCategoryService.remove(+id);
  }
}
