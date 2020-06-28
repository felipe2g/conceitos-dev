import { Request, Response } from 'express';
import createUser from './services/CreateUser';

// string, number, boolean, object, array
// interface = tipagem de conjunto de dados

export function helloWorld(request: Request, response: Response) {

  const user = createUser({
    email: 'felipe@email.com',
    password: '123456',
  });

  return response.json({ message: 'Hello World' });
}