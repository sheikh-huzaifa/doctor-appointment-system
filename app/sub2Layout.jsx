import React from 'react'
 import { SessionProvider } from 'next-auth/react';
 


const Sub2Layout =({children}) => {
    

  
    return (
        <SessionProvider  >
         
        
        
         
         
        
        
        
        <div className='bg-slate-200 w-100 h-100  '>{children}
        </div>   </SessionProvider>
  )
}
Sub2Layout.propTypes = {}

export default Sub2Layout