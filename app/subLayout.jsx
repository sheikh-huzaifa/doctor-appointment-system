"use client"
import React from 'react'
import Sub2Layout from './sub2Layout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const SubLayout = ({children}) => {
    
    return (
      <html lang="en" className=' '>
        
        <body className={inter.className}>
         
         <Sub2Layout children={children}/>
          
        </body>
        
      </html>
    )
}

SubLayout.propTypes = {}

export default SubLayout