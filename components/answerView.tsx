
"use client";

import Layout from "@/components/layout";
import Answer from "@/components/answer";

export default function AnswerView({ question }: any) {
  return (
    <Layout title="Answer View">
      <Answer question={question} />
    </Layout>
  );
}
