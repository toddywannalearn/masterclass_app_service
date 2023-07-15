import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { ExerciseCategoryController } from './exercise-category.controller';
import { ExerciseCategoryService } from './exercise-category.service';

@Module({
  imports: [SharedModule],
  controllers: [ExerciseCategoryController],
  providers: [ExerciseCategoryService],
})
export class ExerciseCategoryModule {}
