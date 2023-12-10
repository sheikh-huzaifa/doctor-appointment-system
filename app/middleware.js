import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    // console.log(req.nextauth.token)
  },
  {
    secret: process.env.SECRET_KEYS
  }
)

export const config = { matcher: ["/PatientPage"] }