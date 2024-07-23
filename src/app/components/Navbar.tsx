"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "../../utils/cn";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
function Navbar({ className }: { className?: string }) {
  const router = useRouter()

  const logout = async () => {
    try {
        await axios.get('/api/users/logout')
        toast.success('Logout successful')
        router.push('/login')
    } catch (error:any) {
        console.log(error.message);
        toast.error(error.message)
    }
}


  return (
    <>
      <div
        className={cn(
          "fixed felx items-center top-10 inset-x-0 max-w-3xl mx-auto z-50",
          className
        )}
      >
        <ul className="flex justify-around text-white font-bold text-xl  bg-black rounded-full h-20 items-center  ">
          <li>
            <Link href={"/"}>
           Home
            </Link>
           
          </li>
      
          <Link href={"/featured"}><li className="cursor-pointer">
             
              Our courses
            
           
              </li>
              </Link>
            <li onClick={logout}
        
              className="cursor-pointer"
            >
              Logout
            </li>
          
        </ul>
      </div>
    </>
  );
}

export default Navbar;
