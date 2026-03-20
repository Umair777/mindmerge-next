import React from "react";
import TagList from "./answercard/tagList";
export default function Answer( {question}) {
	return (
		
		<div className="flex flex-col bg-[#FCF4EC]">
			<div className="self-stretch bg-white ">
				
				<div className="flex items-start self-stretch mr-[82px] gap-[9px] ">
					
					<div className="flex flex-1 items-start gap-[45px] "> 
						<div className="flex flex-1 flex-col items-center gap-5 bg-black">
							<div className="flex flex-col items-start self-stretch bg-white py-[50px] pr-10 gap-5 rounded-[5px]" 
								style={{
									boxShadow: "2px 1px 5px #00000026"
								}}>
								<div className="flex items-center self-stretch ml-10">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/4rhb9pqa_expires_30_days.png"} 
										className="w-10 h-10 mr-[15px] object-fill"
									/>
									<div className="flex flex-col shrink-0 items-start gap-[5px]">
										<span className="text-black text-[13px] mr-10" >
											{"@Golanginya"}
										</span>
										<span className="text-[#808080] text-[10px]" >
											{"12 November 2020 19:35"}
										</span>
									</div>
									<div className="flex-1 self-stretch">
									</div>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/a2lww5bx_expires_30_days.png"} 
										className="w-6 h-6 object-fill"
									/>
								</div>
								<span className="text-black text-lg font-bold ml-10" >
									{question}
								</span>
								<span className="text-black text-sm ml-10" >
									{"Mi magna sed nec nisl mattis. Magna cursus tincidunt rhoncus imperdiet fermentum pretium, pharetra nisl. Euismod."}
								</span>
								<div className="flex items-center self-stretch bg-[#EAEAEA] py-2.5 ml-10">
									<span className="text-[#857857] text-sm text-center w-[7px] mx-4" >
										{"1\n2\n3\n4\n5\n6\n7"}
									</span>
									<span className="text-black text-sm w-[196px]" >
										{"package mian\n\nimport “fmt”\n\nfunc main() {\n      fmt.Println(“Hello, world!”)\n}"}
									</span>
								</div>
								<span className="text-black text-sm ml-10" >
									{"Posuere arcu arcu consectetur turpis rhoncus tellus. Massa, consectetur massa sit fames nulla eu vehicula ullamcorper. Ante sit mauris elementum sollicitudin arcu sit suspendisse pretium. Nisl egestas fringilla justo bibendum."}
								</span>
								< TagList question={question} />
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
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											
										);
									}

