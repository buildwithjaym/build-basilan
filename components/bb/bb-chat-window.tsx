"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Message = {
  id: string;
  role: "user" | "bb";
  content: string;
};

type Props = {
  messages: Message[];
  sendMessage: (message: string) => void;
  typing: boolean;
  onClose: () => void;
};

const quickActions = [
  "What is Build Basilan?",
  "Who can apply?",
  "How does it work?",
  "Website services",
];

export default function BBChatWindow({
  messages,
  sendMessage,
  typing,
  onClose,
}: Props) {
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function send() {
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="
          fixed z-[999]
          bottom-4 right-4 left-4
          sm:left-auto sm:right-6 sm:bottom-24

          w-auto sm:w-[380px]
          h-[min(560px,80dvh)] sm:h-[560px]
          max-h-[calc(100dvh-2rem)]

          flex flex-col
          rounded-2xl
          bg-white
          shadow-2xl
          border border-[#E5EDF5]
          overflow-hidden
        "
      >
        {/* HEADER */}
        <div className="flex items-center justify-between bg-[#0B2B4C] px-4 py-3 text-white shrink-0">
          <div className="min-w-0">
            <p className="font-semibold text-sm truncate">BB</p>
            <p className="text-xs text-blue-100 truncate">
              Build Basilan Assistant
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close chat"
            className="
              flex h-7 w-7 shrink-0 items-center justify-center
              rounded-full text-lg leading-none text-white/90
              hover:bg-white/10 transition-colors
            "
          >
            ×
          </button>
        </div>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
          {messages.length === 0 && (
            <>
              <div className="max-w-[85%] rounded-2xl bg-[#F3F7FA] px-3 py-3 text-sm text-[#0B2B4C]">
                Hi! I am BB, the Build Basilan Assistant. How can I help you
                today?
              </div>

              <div className="flex flex-wrap gap-2">
                {quickActions.map((item) => (
                  <button
                    key={item}
                    onClick={() => sendMessage(item)}
                    className="
                      rounded-full border border-[#DCE6F0]
                      px-3 py-2 text-xs text-[#0B2B4C]
                      hover:bg-[#F3F7FA] transition-colors
                    "
                  >
                    {item}
                  </button>
                ))}
              </div>
            </>
          )}

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={
                msg.role === "user" ? "flex justify-end" : "flex justify-start"
              }
            >
              <div
                className={
                  msg.role === "user"
                    ? "max-w-[75%] break-words rounded-2xl bg-[#147DE1] px-3 py-2 text-sm text-white"
                    : "max-w-[80%] break-words rounded-2xl bg-[#F3F7FA] px-3 py-2 text-sm text-[#0B2B4C]"
                }
              >
                {msg.content}
              </div>
            </div>
          ))}

          {typing && (
            <div className="text-sm text-[#52687A]">BB is typing...</div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* INPUT */}
        <div className="border-t p-3 shrink-0">
          <div className="flex items-center gap-2 rounded-full border px-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") send();
              }}
              placeholder="Ask BB..."
              className="flex-1 min-w-0 py-2 outline-none text-sm bg-transparent"
            />

            <button
              onClick={send}
              disabled={!input.trim()}
              aria-label="Send message"
              className="
                shrink-0 px-2 font-semibold text-[#147DE1]
                disabled:opacity-40 disabled:cursor-not-allowed
              "
            >
              ➤
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}