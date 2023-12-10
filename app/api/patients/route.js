import { prisma } from "@/config/db"
import { NextResponse } from "next/server"

export const POST =async(req)=>{
    try {
        const body =await req.json()
        const response = await prisma.patients.create({
            data: {
              
              email:body.email,
              name:body.name,
              role:"patient",
              phoneNo:body.phoneNo,
              password:body.password,
              medicalHistory:""
            },
          })
        return NextResponse.json({message:"Working"})
    } catch (error) {
        return NextResponse.json({message:"Something went wrong",error})
    }
}