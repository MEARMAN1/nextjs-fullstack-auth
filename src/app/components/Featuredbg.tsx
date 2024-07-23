import React from "react";
import { Vortex } from "@/app/components/ui/vortex";

export function Featuredbg() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-5xl md:text-7xl font-bold text-center">
       Join us 
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        For the best way to learn music
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          
        </div>
      </Vortex>
    </div>
  );
}
