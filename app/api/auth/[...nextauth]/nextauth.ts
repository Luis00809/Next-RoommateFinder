import { AuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'credentials',
            credentials: {
                email: {
                    label: 'email',
                    type: "email"
                },
                password: {
                    label: 'password',
                    type: 'password'
                }
            },
            authorize: async (credentials): Promise<User | null> => {
                if (!credentials) {
                    throw new Error("Credentials not supplied in the signIn request");
                  }
                  const parsedCredentials = z
                  .object({ email: z.string().email(), password: z.string().min(6),})
                  .safeParse(credentials);

                  if (parsedCredentials.success) {
                    const { email, password} = parsedCredentials.data;
                    const user = await getUser(email);

                    if (!user) {
                        console.log('User not found');
                        return null;
                    }
            
                    const passwordsMatch = await bcrypt.compare(password, user.password);
        
                    if(passwordsMatch){
                        return {...user, id: user.id}
                    }
                    console.log('Invalid credentials');
                    return null
                }
                return null;
            }
          }),
    ], 
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
              token.id = user.id;
            }
            return token;
          },
          async session({ session, user, token }) {
            // Let the frontend see the user ID
            session.user.id = token.id as string;
            console.log('Session User ID: ', session.user.id);
            return session;
          },
    }
}

async function getUser(email: string): Promise<User | null> {
    try {
        const user = await sql<User>`SELECT * FROM users WHERE email = ${email}`;
        return user.rows[0];
    } catch (error) {
        console.log('failed to fetch user: ', error);
        return null;
        
    }
};

// export async function getUserId() {
//     const session = await getServerSession(authOptions);
//     return session?.user?.id;
//   }
  
