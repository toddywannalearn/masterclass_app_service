import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class ExerciseService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createExerciseDto: Prisma.ExerciseCreateInput) {
    return this.prismaService.exercise.create({
      data: createExerciseDto,
    });
  }

  findAll() {
    return this.prismaService.exercise.findMany({
      include: {
        category: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.exercise.findUnique({
      include: {
        category: true,
      },
      where: { id: id },
    });
  }

  update(id: number, updateExerciseDto: Prisma.ExerciseUpdateInput) {
    return this.prismaService.exercise.update({
      data: updateExerciseDto,
      where: { id: id },
    });
  }

  remove(id: number) {
    return this.prismaService.exercise.delete({
      where: { id: id },
    });
  }
}
