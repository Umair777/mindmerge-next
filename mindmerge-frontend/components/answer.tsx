"use client";
import React, { useState } from "react";
import TagList from "@/components/tagList";
import VoteButton from "@/components/voteButton";
import UserInfo from "@/components/userInfo";

export default function Answer({ question }: { question: any }) {
  console.log("Answer loadedd");
  console.log("Question prop:", question);
  const [isAIEnabled, setIsAIEnabled] = useState(false);

  const rawQuestionText = question?.original_text || "";
  const rawCode = [
    'import {useState} from "react"',
    "",
    "export default function Test(){",
    "const [count,setCount]=useState(0)",
    "",
    "function handleClick(){",
    "setCount(count+1)",
    "console.log(count)",
    "}",
    "",
    "return(",
    "<div>",
    "<p>{count}</p>",
    '<button onClick={handleClick}>add</button>',
    "</div>",
    ")",
    "}",
  ];

  return (
    <div className="flex items-start self-stretch mr-[321px] gap-[9px]">
      <div className="flex flex-1 items-start gap-[45px]">
        <div className="flex flex-1 flex-col items-center gap-5 bg-black">
          <div
            className="flex flex-col items-start self-stretch bg-white py-[50px] pr-10 gap-5 rounded-[5px]"
            style={{ boxShadow: "2px 1px 5px #00000026" }}
          >
            <UserInfo
            //   question={question}\
            question={question}
              isAIEnabled={isAIEnabled}
              setIsAIEnabled={setIsAIEnabled}
            />

            {/* 🔵 RAW QUESTION VIEW */}
            {!isAIEnabled && (
              <>
                <span className="text-black text-lg font-bold ml-10">
                  {/* {question} */}
                  {rawQuestionText}
                </span>

                <span className="text-black text-sm ml-10 whitespace-pre-line">
                  {/* {rawQuestionText} */}
                </span>

                <div className="bg-gray-100 p-4 rounded-md ml-10 w-full font-mono text-sm text-black">
                  {rawCode.map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>
              </>
            )}

            {/* 🟢 AI FORMATTED VIEW */}
            {isAIEnabled && (
              <>
                <h2 className="text-xl font-bold ml-10 text-black">
                  Why does React useState log the previous state value after updating?
                </h2>

                <h3 className="text-md font-semibold ml-10 mt-4 text-black">
                  Problem Description
                </h3>

                <p className="text-sm ml-10 text-black">
                  I am using React's useState hook to update a counter.
                  However, when I log the value immediately after calling
                  setCount, it prints the previous value instead of the updated one.
                </p>
                <h3 className="text-md font-semibold text-black ml-10 mt-4 ">
                  Code Example
                </h3>

                <div className="bg-gray-900 p-4 rounded-md ml-10 mr-10 w-full font-mono text-sm">
                  {rawCode.map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>

                <h3 className="text-md font-semibold ml-10 mt-4 text-black">
                  Observed Behavior
                </h3>

                <p className="text-sm ml-10 whitespace-pre-line text-black">
                  When clicking the button:
                  - UI updates correctly
                  - console.log(count) prints the previous value
                </p>

                <h3 className="text-md font-semibold ml-10 mt-4 text-black">
                  Main Question
                </h3>

                <p className="text-sm ml-10 text-black">
                  Why does useState not immediately reflect the updated value?
                  Is state updating asynchronous in React?
                </p>
              </>
            )}

            <div className="flex justify-between items-center self-stretch ml-10 mt-4">
              <TagList question={question} />
              <VoteButton question={question} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}