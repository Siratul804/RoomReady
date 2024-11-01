import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "./lib/db";
import { User } from "./lib/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ email: credentials.email });

    if (!user) throw new Error("Email is not valid.");

    if (!user) {
      console.log("Email is not valid.");
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) {
      console.log("Wrong password.");
    }

    if (!isPasswordCorrect) throw new Error("Wrong password.");

    return user;
  } catch (err) {
    // console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  // ADD ADDITIONAL INFORMATION TO SESSION
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.uap_id = user.uap_id;
        token.isAdmin = user.isAdmin;
        token.batch = user.batch;
        token.section = user.section;
      }
      // console.log(token);
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.email = token.email;
        session.user.uap_id = token.uap_id;
        session.user.isAdmin = token.isAdmin;
        session.user.batch = token.batch;
        session.user.section = token.section;
      }
      return session;
    },
  },
});
