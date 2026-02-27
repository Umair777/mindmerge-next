"use client";
import React, { useState } from "react";
import TagList from "@/components/tagList";
import VoteButton from "@/components/voteButton";
import UserInfo from "@/components/userInfo";
import CodeBlock from "@/components/codeBlock";
import ToggleAI from "@/components/toggleAI";
export default function Answer( {question}: {question: string}) {
    const [isAIEnabled, setIsAIEnabled] = useState(false);
    
    return (
        
        // <div className="flex flex-col bg-white">
        //     <div className="self-stretch bg-white ">
                
                <div className="flex items-start self-stretch mr-[321px] gap-[9px] ">
                    
                    <div className="flex flex-1 items-start gap-[45px] "> 
                        <div className="flex flex-1 flex-col items-center gap-5 bg-black">
                            <div className="flex flex-col items-start self-stretch bg-white py-[50px] pr-10 gap-5 rounded-[5px]" 
                                style={{
                                    boxShadow: "2px 1px 5px #00000026"
                                }}>
                                <UserInfo
                                question={question}
                                isAIEnabled={isAIEnabled}
                                setIsAIEnabled={setIsAIEnabled}
                                />
                                {/* < ToggleAI  />  */}
                                <span className="text-black text-lg font-bold ml-10" >
                                    {question}
                                </span>
                                {isAIEnabled && (
                                <>
                                <span className="text-black text-sm ml-10" >
                                    {"I am using React's useState hook to update a counter value. However, when I click the button and log the value immediately after calling setCount, the console prints the previous value instead of the updated one."}
                                </span>
                                
                                                                <CodeBlock question={question} />
                                                                 
                                                                <span className="text-black text-sm ml-10" >
                                                                    {`❓ Observed Behavior \n\n
                                                                    When clicking the button: The UI updates correctly But console.log(count) prints the previous value
                                🤔 Question \n\n
                                Why does useState not immediately reflect the updated value inside the same function call? Is state updating asynchronous in React?`}
                                                                </span>
                                </>
                                 )
                                 }
                                <div className="flex justify-between items-center self-stretch ml-10 mt-4">
                                    < TagList question={question} />
                                    < VoteButton question={question} />
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
        //     </div>
        // </div>
    
);
}


