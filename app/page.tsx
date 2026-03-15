"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Header from "@/components/header";
import PostQuestion from "@/components/postQuestion";

export default function HomePage() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [question, setQuestion] = useState("");

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/auth");
      } else {
        setUser(data.user);
      }
    };

    checkUser();
  }, [router]);

  if (!user) return null;

  return (
    <div>
        <PostQuestion
          question={question}
          setQuestion={setQuestion}
        />

    </div>
  );
}