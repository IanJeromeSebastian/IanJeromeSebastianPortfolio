import React from "react";
import { TextHoverEffect } from "@/ui/text-hover-effect";

export default function TextHoverEffectDemo() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* <div className="text-xl md:text-2xl lg:text-4xl font-semibold"> */}
        <div className="flex flex-col items-center -space-y-10 md:-space-y-40">
        <TextHoverEffect text="APP/FRONTEND" />
        <TextHoverEffect text="DEVELOPER" />
      </div>
      {/* </div> */}
    </div>
  );
}
