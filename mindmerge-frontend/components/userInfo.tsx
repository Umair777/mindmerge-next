"use client";

import React from "react";
import ToggleAI from "./toggleAI";

export default function UserInfo({
  question,
  isAIEnabled,
  setIsAIEnabled,
}: {
  question: any;
  isAIEnabled: boolean;
  setIsAIEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex items-center self-stretch ml-10 ">
      <img
        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/4rhb9pqa_expires_30_days.png"
        className="w-10 h-10 mr-[15px] object-fill"
      />

      <div className="flex flex-col items-start gap-[10px]">
        <span className="text-black text-[13px]">@leilani</span>
        <span className="text-[#808080] text-[10px]">
          12 November 2020 19:35
        </span>
      </div>

      <div className="flex-1 self-stretch"/>
  <ToggleAI
    enabled={isAIEnabled}
    setEnabled={setIsAIEnabled}
  />
</div>
  );
}