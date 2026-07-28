"use client";

import {
  useState,
} from "react";

import BBButton from "./bb-button";
import BBChatWindow from "./bb-chat-window";


type Message = {
  id: string;
  role: "user" | "bb";
  content: string;
};


export default function BBAssistant() {


  const [open, setOpen] = useState(false);


  const [typing, setTyping] = useState(false);


  const [messages, setMessages] = useState<Message[]>([]);



  async function sendMessage(
    text: string
  ) {

    if (!text.trim()) return;


    const userMessage: Message = {

      id: crypto.randomUUID(),

      role: "user",

      content: text,

    };


    setMessages((previous)=>[
      ...previous,
      userMessage,
    ]);


    setTyping(true);



    try {


      const response = await fetch(
        "/api/bb-chat",
        {
          method:"POST",

          headers:{
            "Content-Type":
            "application/json",
          },

          body: JSON.stringify({
            message:text,
          }),

        }
      );



      const data = await response.json();



      const bbMessage: Message = {

        id: crypto.randomUUID(),

        role:"bb",

        content:
        data.reply ??
        "Sorry, I could not answer that.",

      };



      setMessages((previous)=>[
        ...previous,
        bbMessage,
      ]);



    }

    catch(error){

      console.error(
        "BB Error:",
        error
      );


      setMessages((previous)=>[

        ...previous,

        {

          id: crypto.randomUUID(),

          role:"bb",

          content:
          "Sorry, BB is unavailable right now. Please try again.",

        },

      ]);

    }


    finally {

      setTyping(false);

    }

  }





  return (

    <>

      {
        open && (

          <BBChatWindow

            messages={messages}

            sendMessage={sendMessage}

            typing={typing}

            onClose={()=>
              setOpen(false)
            }

          />

        )
      }



      <BBButton

        open={open}

        onClick={()=>
          setOpen(!open)
        }

      />


    </>

  );

}