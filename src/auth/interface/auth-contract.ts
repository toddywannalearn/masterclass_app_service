/* eslint-disable prettier/prettier */
/** The auth services must implement the AuthContract interface in order to attend the auth guard validation */
export interface AuthContract {
  verifyToken(token: string): Promise<boolean>;
}
