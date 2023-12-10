import { prisma } from "@/config/db"
import { NextResponse } from "next/server"

export const GET = async()=>{
    try {
        await prisma.$connect()

        const users = await prisma.doctor.findMany()
        return NextResponse.json({message:"Working....",users})
    } catch (error) {
        return NextResponse.json({message:"Eroor....",error})

    }
}

export const POST =async(req)=>{
    try {
        const body =await req.json()
        const error69 =[]
        try {
            const response = await prisma.doctor.create({
                data: {
                  
                    email         :  body.email,
                    name          :   body.name,
                    role        :     "Doctor",
                    phoneNo      :    body.phoneNo,
                    password      :    body.password,
                    specialization  :   body.specialization  ,
                    available        :  body.available,
                    startTime        :  body.startTime,
                    endTime           : body.endTime,
                    dayOfAvailablity   :"5",
                },
              });error69.push(response)
        } catch (error) {
            error69.push(error)
        }
        return NextResponse.json({message:"Working",error69 })
    } catch (error) {
        return NextResponse.json({message:"Something went wrong",error})
    }
}