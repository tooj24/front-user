export class User {
  _id: string;
  lastname: string = '';
  firstname: string = '';
  email: string = '';
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUser {
  lastname: string;
  firstname: string;
  email: string;
}

export class UserError {
  lastname: string = '';
  firstname: string = '';
  email: string = '';
}