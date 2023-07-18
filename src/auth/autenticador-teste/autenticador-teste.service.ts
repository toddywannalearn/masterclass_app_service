import { Injectable } from '@nestjs/common';
import { AuthContract } from '../interface/auth-contract';

@Injectable()
export class AutenticadorTesteService implements AuthContract {
  async verifyToken(token: string): Promise<boolean> {
    return token ? true : false;
  }
}
