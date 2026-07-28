interface Props {

onSelect:
(question:string)=>void;

}


export default function BBQuickActions({
onSelect
}:Props){


const actions=[

"Who can apply?",

"What does Build Basilan provide?",

"How does the application work?",

"Contact Build Basilan"

];


return (

<div

className="
flex
flex-wrap
gap-2

"

>

{
actions.map((item)=>(

<button

key={item}

onClick={()=>
onSelect(item)
}

className="
rounded-full

bg-[#F3F7FA]

px-3
py-2

text-xs

text-[#0B2B4C]

transition

hover:bg-[#56C7F3]/30

"

>

{item}

</button>

))

}

</div>

)

}