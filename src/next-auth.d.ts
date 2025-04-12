// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      email: string;
      role?: string;
      status?: string;
      lastname?: string;
    };
  }

  interface User {
    role?: string;
    status?: string;
    lastname?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    status?: string;
    lastname?: string;
  }
}
