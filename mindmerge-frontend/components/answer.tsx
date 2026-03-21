"use client";
import React, { useState, useEffect } from "react";
import TagList from "@/components/tagList";
import VoteButton from "@/components/voteButton";
import UserInfo from "@/components/userInfo";
import ReactMarkdown from "react-markdown";

export default function Answer({ question }: { question: any }) {
  const [isAIEnabled, setIsAIEnabled] = useState(false);
  const [aiData, setAiData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const rawQuestionText = question?.original_text || "";

  console.log("AI STATE:", isAIEnabled);

  // 🔥 Fetch AI response
  const fetchAI = async () => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:8000/improve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: rawQuestionText,
        }),
      });

      const data = await res.json();
      setAiData(data);
    } catch (err) {
      console.error("AI error:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Trigger AI fetch when toggle ON
  useEffect(() => {
    if (isAIEnabled && !aiData) {
      fetchAI();
    }
  }, [isAIEnabled, aiData]);

  // ✅ Reset AI when toggle OFF
  useEffect(() => {
    if (!isAIEnabled) {
      setAiData(null);
    }
  }, [isAIEnabled]);

  // 🔥 BLOCK RENDERER
  const renderBlocks = () => {
    if (!aiData?.blocks) return null;

    return aiData.blocks.map((block: any, i: number) => {
      switch (block.type) {
        case "title":
          return (
            <h2 key={i} className="text-xl font-bold ml-10 text-black">
              {block.content}
            </h2>
          );

        case "text":
          return (
            <div key={i} className="ml-10 mt-4">
              <h3 className="text-md font-semibold text-black">
                {block.label}
              </h3>
              <p className="text-sm text-black whitespace-pre-line">
                {block.content}
              </p>
            </div>
          );

        case "code":
        return (
          <div key={i} className="ml-10 mt-4 mr-10">
            <h3 className="text-md font-semibold text-black">
              {block.label}
            </h3>

            <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto max-w-full text-sm whitespace-pre-wrap break-words">
              {Array.isArray(block.content)
                ? block.content.join("\n")
                : block.content}
            </pre>
          </div>
        );

        default:
          return null;
      }
    });
  };

  return (
          <div
            className="flex flex-col items-start w-full max-w-[800px] bg-white py-6 px-6 gap-5 rounded-[5px]"
            style={{ boxShadow: "2px 1px 5px #00000026" }} >
          
            <UserInfo
              question={question}
              isAIEnabled={isAIEnabled}
              setIsAIEnabled={setIsAIEnabled}
            />

            {/* 🔵 RAW VIEW */}
            {!isAIEnabled && (
              <div className="ml-10 mr-10">
                <h2 className="text-lg font-bold text-black">
                  Raw Question
                </h2>

                <pre className="bg-gray-100 p-4 rounded-md text-sm text-black whitespace-pre-wrap mt-2">
                  {rawQuestionText}
                </pre>
              </div>
            )}

            {/* 🟢 AI VIEW */}
            {isAIEnabled && (
              <>
                {loading && (
                  <p className="ml-10 text-blue-500">
                    Generating AI response...
                  </p>
                )}

                {/* Blocks */}
                {!loading && aiData?.blocks && renderBlocks()}

                {/* Markdown fallback */}
                {!loading && !aiData?.blocks && aiData?.markdown && (
                  <div className="ml-10 mr-10 prose max-w-none">
                    <ReactMarkdown>{aiData.markdown}</ReactMarkdown>
                  </div>
                )}
              </>
            )}

            {/* FOOTER */}
            <div className="flex justify-between items-center self-stretch ml-10 mt-4">
              <TagList question={question} />
              <VoteButton question={question} />
            </div>
          </div>
        
    
  );
}