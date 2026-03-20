


import Layout from "@/components/layout";
import Answer from "@/components/answer";

export default function AnswerView({ params }: { params: { question: string } }) {
  console.log("Params:", params);

	return (
    <Layout title="Answer View">
      <Answer question={params.question} />
    </Layout>
  );
}