"use client";
import { getSession, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";
 
import Link from "next/link";

function PatientPage({ session, user }) {
  const { data: session1, status } = useSession();
  console.log(session1);

//   useEffect(() => {
//     if (status === "unauthenticated") {
//       redirect("/login", "push"); // Redirect unauthorized users
//     }
//   }, [status]);

  return (

     <div className="container h-full text-center mt-5">
    <h1 className="text-5xl">Appointment</h1>
        <div className=" mx-auto h-full text-center d-flex justify-content-center align-items-center mt-3">
             
              
        <div className="h-full">
          <Link href="/PatientPage/book"><button class="button" data-text="Awesome">
            <span class="actual-text">&nbsp;Book&nbsp;</span>
            <span aria-hidden="true" class="hover-text">
              &nbsp;Book&nbsp;
            </span>
          </button></Link>

          <Link href="/PatientPage/check"><button class="button" data-text="Awesome">
            <span class="actual-text">&nbsp;Check&nbsp;</span>
            <span aria-hidden="true" class="hover-text">
              &nbsp;Check&nbsp;
            </span>
          </button></Link>
        </div>
      </div>
     </div>
       
   );
}

export default PatientPage;
