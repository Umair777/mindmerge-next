"use client";
import react from "react";

export default function VoteButton( {question}) {
    return (
        <button className="flex shrink-0 items-center bg-[#1682FD] text-left py-2 px-5 gap-3 rounded-[5px] border-0"
																			onClick={()=>alert("Pressed!")}>
																			<img
																				src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/zu5mx4iv_expires_30_days.png"} 
																				className="w-[13px] h-[13px] rounded-[5px] object-fill"
																			/>
																			<span className="text-white text-xs font-bold" >
																				{"Vote"}
																			</span>
																		</button>
    )
}