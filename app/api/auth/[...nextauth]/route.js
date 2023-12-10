import NextAuth from "next-auth";
import {Nextauth } from "../option"
 
const handler = NextAuth(Nextauth)
export {handler as GET, handler as POST}