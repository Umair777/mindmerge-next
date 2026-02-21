"user client";

import React from "react";


export default function Header({ title }: { title: string }) {
	//F48023
  return (
    <div className="flex items-center self-stretch bg-white py-[17px] px-[50px] border border-solid border-[#EAEAEA]">
					<div className="flex shrink-0 items-center mr-[200px] gap-[15px]">
						<img
							src="/logo.png"
							className="w-[35px] h-[39px] object-fill"
						/>
						<span className="text-black text-base" >
							{"MindMerge"}
						</span>
					</div>
					<span className="text-[#808080] text-lg font-bold" >
						{title}
					</span>
					<div className="flex-1 self-stretch">
					</div>
					<button className="flex shrink-0 items-center bg-[#00a6ff] text-left py-3 px-5 mr-[30px] gap-3 rounded-[5px] border-0"
						onClick={()=>alert("Pressed!")}>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/fixkm6rc_expires_30_days.png"} 
							className="w-[13px] h-[13px] rounded-[5px] object-fill"
						/>
						<span className="text-white text-xs font-bold" >
							{"Ask a question"}
						</span>
					</button>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/n9jzp7ev_expires_30_days.png"} 
						className="w-6 h-[31px] mr-[30px] object-fill"
					/>
					<div className="flex shrink-0 items-center gap-3.5">
						<div className="flex flex-col shrink-0 items-start bg-[url('https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/5dp2tsbj_expires_30_days.png')] bg-cover bg-center pb-[35px] pl-[34px]">
							<div className="flex flex-col items-start bg-[#00a6ff] py-[3px] px-[5px] rounded-[10px] border border-solid border-white">
								<span className="text-white text-[10px]" >
									{"0"}
								</span>
							</div>
						</div>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/164s7jjt_expires_30_days.png"} 
							className="w-1.5 h-1.5 object-fill"
						/>
					</div>
				</div>
  );
}
