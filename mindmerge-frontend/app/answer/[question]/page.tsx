import Layout from "@/components/layout";
import Answer from "@/components/answer";

export default async function AnswerPage({
  params,
}: {
  params: Promise<{ question: string }>;
}) {
  const { question } = await params;

  const decodedQuestion = decodeURIComponent(question);

  return (
    <Layout title="Answer View">
      <Answer question={decodedQuestion} />
    </Layout>
  );
}
