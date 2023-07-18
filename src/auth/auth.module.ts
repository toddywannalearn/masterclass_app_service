import { Module } from '@nestjs/common';
import { AutenticadorTesteService } from './autenticador-teste/autenticador-teste.service';
import { FirebaseService } from './firebase/firebase.service';

@Module({
  providers: [FirebaseService, AutenticadorTesteService],
  exports: [FirebaseService, AutenticadorTesteService],
})
export class AuthModule {}
