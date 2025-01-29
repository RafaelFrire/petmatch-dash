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

          console.log("Authentication failed: Invalid input types");
          return null;
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
