"use client";

import Layout from "@/components/layout";
import Question from "@/components/question";
import Suggestions from "@/components/suggestions";

export default function PostQuestion({ question, setQuestion }: any) {
  return (
    <Layout title="New Question">
      <Question
        Question={question}
        setQuestion={setQuestion}
      />
      <Suggestions />
    </Layout>
  );
}
