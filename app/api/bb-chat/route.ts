import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

import { bbKnowledge } from "@/lib/bb-knowledge";


const genAI =
new GoogleGenerativeAI(
process.env.GEMINI_API_KEY!
);



function cleanResponse(text:string){

return text
.replace(/\*\*/g,"")
.replace(/\*/g,"")
.replace(/#/g,"")
.replace(/^- /gm,"")
.replace(/•/g,"")
.replace(/\n{3,}/g,"\n\n")
.trim();

}



export async function POST(
request:Request
){

try{


const {
message
}=await request.json();



if(!message){

return NextResponse.json({

reply:
"Please type a message. I am ready to help you with Build Basilan."

});

}



const model =
genAI.getGenerativeModel({

model:
"gemini-3.5-flash-lite",

systemInstruction:
bbKnowledge,


generationConfig:{

temperature:0.2,

maxOutputTokens:180,

}

});



const result =
await model.generateContent(
message
);



const reply =
cleanResponse(
result.response.text()
);



return NextResponse.json({

reply:
reply ||
"I do not have that information yet. Please contact Jaymar Maruji at jaymmaruji@gmail.com."

});


}

catch(error){

console.error(
"BB Error:",
error
);


return NextResponse.json({

reply:
"Sorry, BB is unavailable right now. Please try again."

},
{
status:500
});


}

}