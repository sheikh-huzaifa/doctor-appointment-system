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
                 console.log("credentials.email",credentials.email);
              const user = await prisma.patients.findFirst({
                where: {
                     
                        email: credentials.email,
                      
            }});
            console.log("user",user);
                  if (user) {
                return user
              } else{return user}               
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: "/api/auth/sigin",
    },
    
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