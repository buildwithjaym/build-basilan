import { motion } from "framer-motion";


interface Props {

role:
"user" | "bb";

content:string;

}


export default function BBMessage({
role,
content
}:Props){


return (

<motion.div

initial={{
opacity:0,
y:10
}}

animate={{
opacity:1,
y:0
}}

className={`
flex

${
role==="user"
?
"justify-end"
:
"justify-start"
}

`}

>


<div

className={`
max-w-[80%]

rounded-2xl

px-3
py-2

text-sm

whitespace-pre-line


${
role==="user"

?

"bg-[#147DE1] text-white"

:

"bg-[#F3F7FA] text-[#0B2B4C]"

}

`}

>

{content}

</div>


</motion.div>

)

}