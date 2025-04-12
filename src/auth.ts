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
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.status = user.status;
        token.lastname = user.lastname;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.role && typeof token.role === "string") session.user.role = token.role;
      if (token?.status && typeof token.status === "string") session.user.status = token.status;
      if (token?.lastname && typeof token.lastname === "string") session.user.lastname = token.lastname;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
