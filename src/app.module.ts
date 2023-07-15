import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExerciseModule } from './exercise/exercise.module';
import { ExerciseCategoryModule } from './exercise-category/exercise-category.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [ExerciseModule, ExerciseCategoryModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
