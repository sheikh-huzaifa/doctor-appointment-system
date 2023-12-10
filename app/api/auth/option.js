 import { prisma } from "@/config/db";
import CredentialsProvider from "next-auth/providers/credentials";
 
 export const Nextauth = {
   
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "Password" }
            },
            async authorize(credentials ) {
                 
                const user = await prisma.patients.findFirst({
                    where: {
                        AND: [
                          {
                            email: credentials.email,
                          },
                          {
                            password: credentials.password,
                          },
                        ],
                      },
                    });

                     const user1 =[]
                    Object.values(user).map((x)=>{user1.push(x);console.log("user1",user1);})
                 console.log(typeof(user))
                 const data = user.role
                  if (user) {
                    return user
                  }                
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    
    callbacks: {
        async jwt({ token, account }) {
          // Persist the OAuth access_token to the token right after signin
          if (account) {
            token.accessToken = account.access_token
          }
          return token
        },
        async session({ session, token, user }) {
          // Send properties to the client, like an access_token from a provider.
          session.accessToken = token.accessToken
          return session
        }
      }
   
     
}