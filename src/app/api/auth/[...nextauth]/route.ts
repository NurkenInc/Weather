import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from '@models/user';
import { connectToDB } from '@utils/database';
import { SessionProps } from '@shared/types/callbacks';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    }),
  ],
  callbacks: {
    async session({ session }: SessionProps) {
      const sessionUser = await User.findOne({ email: session.user?.email });
      session.user.id = sessionUser._id.toString();
      
      return session;
    }
  },
})

export { handler as GET, handler as POST };