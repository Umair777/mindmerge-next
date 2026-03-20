import react from "react";

export default function Suggestions() {
    return (
        <div className="flex flex-col shrink-0 items-start bg-white py-[30px] px-5 gap-10 rounded-[5px] border border-solid border-[#EAEAEA]" 
							style={{
								boxShadow: "0px 0px 5px #0000000D"
							}}>
							<div className="flex flex-col items-start gap-[9px]">
								<div className="flex flex-col items-start gap-2.5">
									<div className="flex items-center mr-[105px] gap-1.5">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/k7dy1iz3_expires_30_days.png"} 
											className="w-[18px] h-[18px] object-fill"
										/>
										<span className="text-black text-[13px]" >
											{"Must-read posts"}
										</span>
									</div>
									<div className="bg-[#EAEAEA] w-[230px] h-[1px]">
									</div>
								</div>
								<div className="flex flex-col items-start gap-2.5">
									<div className="flex items-start">
										<span className="text-[#1682FD] text-2xl ml-[5px] mr-[7px]" >
											{"•"}
										</span>
										<span className="text-[#1682FD] text-[11px] w-[174px] mr-[39px]" >
											{"Please read rules before you start working on a platform"}
										</span>
									</div>
									<div className="flex items-center">
										<span className="text-[#1682FD] text-2xl ml-[5px] mr-[7px]" >
											{"•"}
										</span>
										<span className="text-[#1682FD] text-[11px] mr-[60px]" >
											{"Vision & Strategy of Alemhelp"}
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start gap-[9px]">
								<div className="flex flex-col items-start gap-2.5">
									<div className="flex items-center mr-[119px] gap-1.5">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/7bcov1np_expires_30_days.png"} 
											className="w-[18px] h-[18px] object-fill"
										/>
										<span className="text-black text-[13px]" >
											{"Featured links"}
										</span>
									</div>
									<div className="bg-[#EAEAEA] w-[230px] h-[1px]">
									</div>
								</div>
								<div className="flex flex-col items-start gap-2.5">
									<div className="flex items-center">
										<span className="text-[#1682FD] text-2xl ml-[5px] mr-[7px]" >
											{"•"}
										</span>
										<span className="text-[#1682FD] text-[11px] mr-11" >
											{"Alemhelp source-code on GitHub"}
										</span>
									</div>
									<div className="flex items-center">
										<span className="text-[#1682FD] text-2xl ml-[5px] mr-[7px]" >
											{"•"}
										</span>
										<span className="text-[#1682FD] text-[11px] mr-[101px]" >
											{"Golang best-practices"}
										</span>
									</div>
									<div className="flex items-center">
										<span className="text-[#1682FD] text-2xl ml-[5px] mr-[7px]" >
											{"•"}
										</span>
										<span className="text-[#1682FD] text-[11px] mr-[91px]" >
											{"Alem.School dashboard"}
										</span>
									</div>
								</div>
							</div>
						</div>
						
    )
}