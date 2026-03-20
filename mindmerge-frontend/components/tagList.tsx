"use client";
import react from "react";

export default function TagList( {question}: {question: string}) {
    return (

        <div className="flex shrink-0 items-center gap-2.5">
                                        <button className="flex flex-col shrink-0 items-start bg-[#EAEAEA] text-left py-[5px] px-2.5 rounded-[5px] border-0"
                                            onClick={()=>alert("Pressed!")}>
                                            <span className="text-[#808080] text-[10px]" >
                                                {"java"}
                                            </span>
                                        </button>
                                        <button className="flex flex-col shrink-0 items-start bg-[#EAEAEA] text-left py-[5px] px-2.5 rounded-[5px] border-0"
                                            onClick={()=>alert("Pressed!")}>
                                            <span className="text-[#808080] text-[10px]" >
                                                {"javascript"}
                                            </span>
                                        </button>
                                        <button className="flex flex-col shrink-0 items-start bg-[#EAEAEA] text-left py-[5px] px-2.5 rounded-[5px] border-0"
                                            onClick={()=>alert("Pressed!")}>
                                            <span className="text-[#808080] text-[10px]" >
                                                {"typescript"}
                                            </span>
                                        </button>
                                    </div>
    )
}