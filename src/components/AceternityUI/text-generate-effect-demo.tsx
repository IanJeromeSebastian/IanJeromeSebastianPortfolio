"use client";
import { TextGenerateEffect } from "@/ui/text-generate-effect";

const words = `I am a passionate developer focused on App and Frontend Development. I have experience in building responsive and user-friendly applications using React, TypeScript, and other modern web technologies. I am dedicated to creating seamless user experiences and writing clean, efficient code. Let's connect and create something amazing together!
`;

export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
