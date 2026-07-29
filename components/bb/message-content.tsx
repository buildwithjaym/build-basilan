"use client";

import Link from "next/link";

type Props = {
  content: string;
};

export default function MessageContent({
  content,
}: Props) {
  const parts = content.split(
    /(https?:\/\/[^\s]+)/g
  );

  return (
    <>
      {parts.map((part, index) => {
        if (
          part.startsWith("http://") ||
          part.startsWith("https://")
        ) {
          return (
            <Link
              key={index}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#147DE1] underline break-all"
            >
              {part}
            </Link>
          );
        }

        return (
          <span key={index}>
            {part}
          </span>
        );
      })}
    </>
  );
}