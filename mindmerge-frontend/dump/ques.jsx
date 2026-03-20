import React from "react";
import { useNavigate } from "react-router-dom";

export default function Question() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col bg-white">
			<div className="self-stretch bg-neutral-10">
				
				<div className="flex items-start self-stretch mr-[50px] gap-[45px]">
					
					<div className="flex flex-1 items-start mt-0 gap-[45px]">
						<div className="flex flex-1 flex-col bg-white py-[30px] px-10 gap-5" 
							style={{
								boxShadow: "2px 1px 5px #00000026"
							}}>
							
							
							<textarea
							placeholder="Type your question"
							className="w-full min-h-[321px] p-3 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
							/>
							<div className="flex justify-between items-center self-stretch">
								<button className="flex shrink-0 items-center bg-[#1682FD] text-left py-2 px-5 gap-3 rounded-[5px] border-0"
									onClick={()=>alert("Pressed!")}>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/yfenuh3n_expires_30_days.png"} 
										className="w-[13px] h-[13px] rounded-[5px] object-fill"
									/>
									<span className="text-white text-xs font-bold" >
										{"Add Image"}
									</span>
								</button>
								<div className="flex shrink-0 items-center gap-5">
									<button className="flex flex-col shrink-0 items-start bg-[#EAEAEA] text-left py-2 px-5 rounded-[5px] border-0"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#808080] text-xs" >
											{"Save as draft"}
										</span>
									</button>
									<button className="flex shrink-0 items-center bg-[#F48023] text-left py-2 px-5 gap-3 rounded-[5px] border-0"
										onClick={()=>navigate("/answer")}>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/sd7bdvbx_expires_30_days.png"} 
											className="w-[13px] h-[13px] rounded-[5px] object-fill"
										/>
										<span className="text-white text-xs font-bold" >
											{"Publish"}
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}