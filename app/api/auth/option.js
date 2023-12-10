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

                  if (user) {
                return user
              } else{return null}               
            }
        })
    ],
    secret: process.env.SECRETE_KEYS,
    
    
   
     
}