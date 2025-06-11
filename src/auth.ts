import { login } from "@/hooks/useAuth";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email",
          name: "email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
          name: "password",
        },
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = credentials;

          if (typeof email === "string" && typeof password === "string") {
            const user = await login(email, password);
            if (!user) {
              console.log("Authentication failed: Invalid credentials");
              return null;
            }

            return user.user;
          }

          return null;
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.status = user.status;
        token.lastname = user.lastname;
        token.adopterId = user?.adopterId;
        token.ongId = user?.ongId;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.role && typeof token.role === "string")
        session.user.role = token.role;
      if (token?.status && typeof token.status === "string")
        session.user.status = token.status;
      if (token?.lastname && typeof token.lastname === "string")
        session.user.lastname = token.lastname;
      if (token?.adopterId && typeof token.adopterId === "string")
        session.user.adopterId = token.adopterId;
      if (token?.ongId && typeof token.ongId === "string")
        session.user.ongId = token.ongId;
      if (token?.id && typeof token.id === "string")
        session.user.id = token.id;
      if (token?.name && typeof token.name === "string")
        session.user.name = token.name;
      if (token?.email && typeof token.email === "string")
        session.user.email = token.email;
      return session;
    },
  },
  //   if (token?.id && typeof token.id === "string") session.user.id = token.id;
  //   return session;
  // },
  // async session({ session, token }) {
  //   const userFields = [
  //   "role",
  //   "status",
  //   "lastname",
  //   "id",
  //   "adopterId",
  //   "ongId",
  //   "name",
  //   "email"
  //   ];

  //   userFields.forEach((field) => {
  //   if (token?.[field] && typeof token[field] === "string") {
  //     session.user[field] = token[field];
  //   }
  //   });

  //   return session;
  // },
  // },

  pages: {
    signIn: "/login",
  },
});
