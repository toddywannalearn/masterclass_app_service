import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { AutenticadorTesteService } from '../autenticador-teste/autenticador-teste.service';

/** Guards have a single responsibility. They determine whether a given request will be handled by the route handler or not,
 *  depending on certain conditions (like permissions, roles, ACLs, etc.) present at run-time. This is often referred to as authorization.
 * @see [Guards](https://docs.nestjs.com/guards) */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly bypass: AutenticadorTesteService) {}

  /** In the following implementation of the canActivate method we are accessing the headers' authorization (token) through the Request imported from the express framework.
   * We can use it to validate if the sent token is valid or not using an own authentication service or third party lib like firebase, etc.
   */
  canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    /** Since the bearer token has this syntax "Bearer jdaslekjxl", we splitted the value into a prefix and token,
     *  where the prefix is the "Bearer" and the token is the value that comes after the empty space*/
    const [prefix, token] = request.headers.authorization
      ? request.headers.authorization?.split(' ')
      : [];

    console.log(prefix);
    console.log(token);

    if (!token) {
      throw new UnauthorizedException();
    }

    return this.bypass.verifyToken(token);
  }
}
