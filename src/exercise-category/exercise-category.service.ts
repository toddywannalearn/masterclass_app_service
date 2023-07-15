/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class ExerciseCategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createExerciseCategoryDto: Prisma.ExerciseCategoryCreateInput) {
    return this.prismaService.exerciseCategory.create({
      data: createExerciseCategoryDto,
    });
  }

  findAll() {
    return this.prismaService.exerciseCategory.findMany();
  }

  findOne(id: number) {
    return this.prismaService.exerciseCategory.findUnique({
      where: { id: id },
    });
  }

  update(
    id: number,
    updateExerciseCategoryDto: Prisma.ExerciseCategoryUpdateInput,
  ) {
    return this.prismaService.exerciseCategory.update({
      data: updateExerciseCategoryDto,
      where: {
        id: id,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.exerciseCategory.delete({
      where: { id: id },
    });
  }
}
