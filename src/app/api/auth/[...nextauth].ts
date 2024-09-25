import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID as string,
      clientSecret: process.env.FACEBOOK_SECRET as string,
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
