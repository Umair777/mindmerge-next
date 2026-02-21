import react from "react";
import ToggleSwitch from "./toggleAI";

export default function UserInfo( {question}) {
    return (
        <div className="flex items-center self-stretch ml-10 ">
            <img
                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/4rhb9pqa_expires_30_days.png"} 
                className="w-10 h-10 mr-[15px] object-fill"
            />
            <div className="flex flex-col shrink-10 items-start gap-[10px]"> 
                <span className="text-black text-[13px] mr-10" >
                    {"@leilani"}
                </span>
                <span className="text-[#808080] text-[10px]" >
                    {"12 November 2020 19:35"}
                </span>
            </div>
            <div className="flex-1 self-stretch ">
            </div>
            {/* <img
                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/a2lww5bx_expires_30_days.png"} 
                className="w-6 h-6 object-fill "
            /> */}
            < ToggleSwitch question={question} />


            
        </div>

    )
}