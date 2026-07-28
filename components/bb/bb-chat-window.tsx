"use client";

import {
motion,
AnimatePresence
} from "framer-motion";

import {
useEffect,
useRef,
useState
} from "react";


type Message = {
id:string;
role:"user"|"bb";
content:string;
};


type Props = {

messages:Message[];

sendMessage:(message:string)=>void;

typing:boolean;

onClose:()=>void;

};



const quickActions = [

"What is Build Basilan?",

"Who can apply?",

"How does it work?",

"Website services"

];



export default function BBChatWindow({

messages,

sendMessage,

typing,

onClose

}:Props){


const [input,setInput]=useState("");

const bottomRef =
useRef<HTMLDivElement>(null);



useEffect(()=>{

bottomRef.current?.scrollIntoView({
behavior:"smooth"
});

},[
messages,
typing
]);



function send(){

if(!input.trim())
return;


sendMessage(input);

setInput("");

}



return (

<AnimatePresence>

<motion.div


initial={{
opacity:0,
y:30,
scale:.95
}}

animate={{
opacity:1,
y:0,
scale:1
}}

exit={{
opacity:0,
y:30
}}


className="

fixed

right-6

bottom-24


z-[999]


flex

h-[560px]

w-[380px]


flex-col


rounded-2xl


bg-white


shadow-2xl


border


border-[#E5EDF5]


overflow-hidden



max-md:

right-3

left-3

bottom-20

w-auto

h-[70vh]

"

>



{/* HEADER */}


<div

className="

bg-[#0B2B4C]

px-4

py-3

text-white

flex

justify-between

"

>


<div>

<p className="font-semibold text-sm">

BB

</p>


<p className="text-xs text-blue-100">

Build Basilan Assistant

</p>


</div>


<button

onClick={onClose}

>

×


</button>


</div>





{/* BODY */}


<div

className="

flex-1

overflow-y-auto

p-4

space-y-3

"

>


{
messages.length===0 && (

<>

<div

className="

max-w-[85%]

bg-[#F3F7FA]

rounded-2xl

px-3

py-3

text-sm

text-[#0B2B4C]

"

>

Hi! I am BB, the Build Basilan Assistant.

How can I help you today?

</div>


<div

className="

flex

flex-wrap

gap-2

"

>

{
quickActions.map(
(item)=>(

<button

key={item}

onClick={()=>sendMessage(item)}

className="

rounded-full

border

border-[#DCE6F0]

px-3

py-2

text-xs

text-[#0B2B4C]

"

>

{item}

</button>

)

)

}

</div>


</>

)

}





{
messages.map((msg)=>(


<div

key={msg.id}

className={

msg.role==="user"

?

"flex justify-end"

:

"flex justify-start"

}

>


<div

className={

msg.role==="user"

?

"max-w-[75%] rounded-2xl bg-[#147DE1] text-white px-3 py-2 text-sm"

:

"max-w-[80%] rounded-2xl bg-[#F3F7FA] text-[#0B2B4C] px-3 py-2 text-sm"

}

>

{msg.content}

</div>


</div>


))

}




{
typing && (

<div

className="

text-sm

text-[#52687A]

"

>

BB is typing...

</div>

)

}



<div ref={bottomRef}/>


</div>





{/* INPUT */}


<div

className="

border-t

p-3

"

>


<div

className="

flex

items-center

rounded-full

border

px-3

"

>


<input

value={input}

onChange={(e)=>setInput(e.target.value)}

onKeyDown={(e)=>{

if(e.key==="Enter")
send();

}}

placeholder="Ask BB..."

className="

flex-1

py-2

outline-none

text-sm

"

/>


<button

onClick={send}

className="

text-[#147DE1]

font-semibold

px-2

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