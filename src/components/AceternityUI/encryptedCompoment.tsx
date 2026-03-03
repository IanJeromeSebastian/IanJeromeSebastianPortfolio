import { EncryptedText } from "@/ui/encrypted-text";
import React from "react";

export default function EncryptedTextDemoSecond() {
  return (
    <p className="mx-auto max-w-lg py-10 text-center text-2xl font-bold">
      <EncryptedText
        text="Hi! I'm Ian Jerome M. Sebastian"
        encryptedClassName="text-white dark:text-black-500"
        revealedClassName="dark:text-black text-white "
        revealDelayMs={50}
      />
    </p>
  );
}
