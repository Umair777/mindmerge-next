"use client";

import Layout from "@/components/layout";
import Question from "@/components/question";
import Suggestions from "@/components/suggestions";
import { useState } from "react";

export default function PostQuestion({ question, setQuestion }: any) {
  const messyTemplate = `i dont know why this is not working i am trying to update count but its not changing properly sometimes it logs wrong value also i am using react and useState but maybe i am doing something wrong

import {useState} from "react"

export default function Test(){
const [count,setCount]=useState(0)

function handleClick(){
setCount(count+1)
console.log(count)
}

return(
<div>
<p>{count}</p>
<button onClick={handleClick}>add</button>
</div>
)
}
`;
  const [QuestionText, setQuestionText] = useState(messyTemplate);
  return (
    <Layout title="New Question">
      <Question
        Question={QuestionText}
        setQuestion={setQuestionText}
      />
      <Suggestions />
    </Layout>
  );
}
