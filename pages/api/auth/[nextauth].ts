import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '../../../database/models/users';

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Senha', type: 'password' },
      },
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // perform you login logic
        // find out user from db
        const user = User.findAll({
          where: {
            email,
            password,
          },
        });
        if (user) return user;
        else return null;

        // if everything is fine
      },
    }),
  ],
};

export default NextAuth(authOptions);
