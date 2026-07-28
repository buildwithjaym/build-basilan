"use client";

import { motion } from "framer-motion";

interface Props {
  role: "user" | "bb";
  content: string;
}

export default function BBMessage({ role, content }: Props) {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`
          max-w-[85%] sm:max-w-[80%]
          rounded-2xl px-3 py-2
          text-sm leading-relaxed
          whitespace-pre-line break-words [overflow-wrap:anywhere]
          shadow-sm
          ${
            isUser
              ? "bg-[#147DE1] text-white rounded-br-md"
              : "bg-[#F3F7FA] text-[#0B2B4C] rounded-bl-md"
          }
        `}
      >
        {content}
      </div>
    </motion.div>
  );
}