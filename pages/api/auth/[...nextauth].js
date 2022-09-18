import NextAuth from "next-auth/next";

import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import EmailProvider from 'next-auth/providers/email'

import CredentialProvider from "next-auth/providers/credentials";
export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: "NextAuth.js",
    // }),

    CredentialProvider({
      name: "Credential",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "test0112@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: (credentials) => {
        if (
          credentials.username == "abhi@123" &&
          credentials.password == "abhi1890"
        ) {
          return {
            id: 2,
            name: "test",
            email: "test@test.com",
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  secret: process.env.JWT_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET,
    encryption: true,
  },
  //   pages:{
  //       signIn:"signlog"
  //   }
});
