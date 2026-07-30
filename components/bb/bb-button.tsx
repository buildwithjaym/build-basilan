"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";


interface BBButtonProps {
  onClick: () => void;
  open: boolean;
}


export default function BBButton({
  onClick,
  open,
}: BBButtonProps) {


  return (

    <motion.button

      onClick={onClick}

      initial={{
        scale: 0
      }}

      animate={{
        scale: 1
      }}

      whileHover={{
        scale: 1.08
      }}

      whileTap={{
        scale: .95
      }}

      className="
fixed

bottom-6
right-6

z-50

flex
h-12
w-12

items-center
justify-center

rounded-full

bg-[#147DE1]

text-white

shadow-xl

transition

hover:bg-[#56C7F3]

"

      aria-label="Open BB Assistant"

    >

      <MessageCircle
        size={22}
      />


    </motion.button>

  )

}