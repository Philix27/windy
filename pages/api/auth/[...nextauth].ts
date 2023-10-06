import prismaClient from "@/src/prisma/client";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { RequestInternal, Awaitable, User, AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  secret: process.env.SECRET,
  session: { strategy: "jwt" },
  debug: process.env.NODE_ENV === "development",
  callbacks: {
    async jwt({ token, profile, account }) {
      if (profile) {
        token.name = profile.name;
      }
      return token;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    Github({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "johndoe@gmail.com",
        },
        password: { label: "Passowrd", type: "password" },
        username: { label: "Username", type: "text", placeholder: "John Doe" },
      },
      authorize: function (
        credentials:
          | Record<"email" | "password" | "username", string>
          | undefined,
        req: Pick<RequestInternal, "headers" | "query" | "body" | "method">
      ): Awaitable<User | null> {
        const user = {
          id: "1",
          name: "Philo",
          email: "philixbob@gmail.com",
        };

        return user;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
