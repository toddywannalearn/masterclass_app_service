import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as account from '../FirebaseAccount.json';
import { AuthContract } from '../interface/auth-contract';

@Injectable()
export class FirebaseService implements AuthContract {
  firebaseApp: admin.app.App;

  constructor() {
    this.firebaseApp = admin.initializeApp({
      credential: admin.credential.cert(account as admin.ServiceAccount),
    });
  }

  async verifyToken(token: string): Promise<boolean> {
    try {
      await this.firebaseApp.auth().verifyIdToken(token);
      return true;
    } catch (e) {
      return false;
    }
  }
}
