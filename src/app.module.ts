import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ExerciseCategoryModule } from './exercise-category/exercise-category.module';
import { ExerciseModule } from './exercise/exercise.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [ExerciseModule, ExerciseCategoryModule, SharedModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
