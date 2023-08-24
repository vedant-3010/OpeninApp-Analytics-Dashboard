import NextAuth from 'next-auth';
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID,
      clientSecret: process.env.APPLE_CLIENT_SECRET,
    }),

  ],
  callbacks: {
    async signIn(user, account, profile) {
      if (account.provider === 'google' || account.provider === 'apple') {
        return true;
      }
      return false;
    },
    async redirect(url, baseUrl) {
      return baseUrl + '/dashboard';
    },
  },
});
