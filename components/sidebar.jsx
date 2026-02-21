import React from "react";

export default function Sidebar() {
  return (
    <div className="flex flex-col shrink-0 items-start bg-white pt-10">
						<div className="flex items-center bg-white py-[11px] mb-[30px]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/nfnghlyg_expires_30_days.png"} 
								className="w-[18px] h-[18px] ml-[50px] mr-3 object-fill"
							/>
							<span className="text-black text-[13px] mr-[188px]" >
								{"Search"}
							</span>
						</div>
						<div className="flex flex-col items-start mb-[30px] gap-2.5">
							<span className="text-[#808080] text-xs ml-[50px]" >
								{"menu"}
							</span>
							<div className="flex items-center bg-white py-[11px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/cjqgky9y_expires_30_days.png"} 
									className="w-[18px] h-[18px] ml-[50px] mr-3 object-fill"
								/>
								<span className="text-black text-[13px] mr-[168px]" >
									{"Questions"}
								</span>
							</div>
							<div className="flex items-center bg-white py-[11px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/j77qnbtr_expires_30_days.png"} 
									className="w-[18px] h-[18px] ml-[50px] mr-3 object-fill"
								/>
								<span className="text-black text-[13px] mr-[201px]" >
									{"Tags"}
								</span>
							</div>
							<div className="flex items-center bg-white py-[11px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/or3z3wmr_expires_30_days.png"} 
									className="w-[18px] h-[18px] ml-[50px] mr-3 object-fill"
								/>
								<span className="text-black text-[13px] mr-[181px]" >
									{"Ranking"}
								</span>
							</div>
						</div>
						<div className="flex flex-col items-start mb-[341px] gap-2.5">
							<span className="text-[#808080] text-xs ml-[50px]" >
								{"PERSONAL NAVIGATOR"}
							</span>
							<div className="flex items-center bg-blue]">
								<div className="bg-[#00a6ff] w-[5px] h-[41px] mr-[45px]">
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/81hpilkl_expires_30_days.png"} 
									className="w-[18px] h-[18px] mr-3 invert sepia saturate-[5000%] hue-rotate-[200deg] " 
								/>
								<span className="text-[#00a6ff] text-[13px] font-bold mr-[135px]" >
									{"Your questions"}
								</span>
							</div>
							<div className="flex items-center bg-white py-[11px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/ufovupci_expires_30_days.png"} 
									className="w-[18px] h-[18px] ml-[50px] mr-3 object-fill"
								/>
								<span className="text-black text-[13px] mr-[145px]" >
									{"Your answers"}
								</span>
							</div>
							<div className="flex items-center bg-white py-[11px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/qq44uy71_expires_30_days.png"} 
									className="w-[18px] h-[18px] ml-[50px] mr-3 object-fill"
								/>
								<span className="text-black text-[13px] mr-[117px]" >
									{"Your likes & votes"}
								</span>
							</div>
						</div>
					</div>
  );
}
