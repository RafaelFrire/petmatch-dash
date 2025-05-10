export interface Account {
  id: string;
  email: string;
  name: string;
  lastname?: string;
  role: RoleEnum;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  documentPath?: string;
  password_reset_token: string | null;
  password_reset_experies: Date | null;
  status: StatusEnum;
  ong?: Ong;
  adopter?: Adopter;
}

export interface Adopter {
  id: string;
  document: string;
  phone: string;
  address: string;
  zipcode: string;
  state: string;
  city: string;
  userId: string;
  user: Account;
}

export interface Ong {
  id: string;
  cnpj: string;
  phone: string;
  address: string;
  zipcode: string;
  state: string;
  city: string;
  userId: string;
  user: Account;
}

enum RoleEnum {
  ADOPTER = "ADOPTER",
  ONG = "ONG",
  ADMIN = "ADMIN",
}

enum StatusEnum {
  ACTIVE = "ACTIVE",
  INATIVE = "INATIVE",
  PENDING = "PENDING",
  BLOCK = "BLOCK",
}
