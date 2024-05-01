import { mockedUserProxy } from '../models/mocks/user.mock';

export function canEffectuateLogin(cpf: string, password: string): boolean {
  const user = mockedUserProxy.find((user) => user.cpf === cpf);
  if (user && user.password === password) return true;
  return false;
}
