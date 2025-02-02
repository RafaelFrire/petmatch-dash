
export interface User {
  name: string;
  lastname: string;
  email: string;
  password: string;
  token: string;
};

export interface RegisterUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
    zipcode: string;
    address: string;
    state: string;
    city: string;
    documentId: string;
    attachment?: File | null;
  };