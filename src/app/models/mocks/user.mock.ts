
import { UserProxy } from '../proxies/user.proxy';

export const mockedUserProxy: UserProxy[] = [
  {
    cpf: "12345678900",
    password: "senha123",
    phone: "(11) 98765-4321",
    name: "João Silva",
    email: "joao.silva@example.com",
    address: "Rua das Flores, 123",
    emergencyContact: "5511999998888",
    emergencyContactName: "Maria Silva"
  },
  {
    cpf: "98765432100",
    password: "abc123",
    phone: "5522123456789",
    name: "Maria Souza",
    email: "maria.souza@example.com",
    address: "Avenida Principal, 456",
    emergencyContact: "(22) 11111-2222",
    emergencyContactName: "José Souza"
  },
  {
    cpf: "55555555555",
    password: "senha456",
    phone: "(33) 55555-5555",
    name: "Carlos Oliveira",
    email: "carlos.oliveira@example.com",
    address: "Praça Central, 789",
    emergencyContact: "5533777777777",
    emergencyContactName: "Ana Oliveira"
  }
];
