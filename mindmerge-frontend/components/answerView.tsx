
import Layout from "@/components/layout";
import Answer from "@/components/answer";
import { supabase } from "@/lib/supabaseClient";

export default async function AnswerView({ params }: any) {
  console.log("AnswerView loaded");
  const { question } = await params;

  const { data, error } = await supabase
    .from("questions")
    .select("*")
    .eq("id", question)
    .single();

  console.log("Data:", data);
  console.log("Error:", error);
  // console.log("Fetched data:", data);
  return (
    <Layout title="Answer View">
      <Answer question={data} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  );
}