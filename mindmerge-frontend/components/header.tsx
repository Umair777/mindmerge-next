"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Header({ title }: { title: string }) {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (data.user) {
        setEmail(data.user.email ?? null);
      }
    };

    getUser();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/auth");
  };

  return (
    <div className="flex items-center self-stretch bg-white py-[17px] px-[50px] border border-solid border-[#EAEAEA]">

      {/* Logo */}
      <div
        className="flex shrink-0 items-center mr-[200px] gap-[15px] cursor-pointer"
        onClick={() => router.push("/")}
      >
        <img src="/logo.png" className="w-[35px] h-[39px] object-fill" />
        <span className="text-black text-base">MindMerge</span>
      </div>

      {/* Page title */}
      <span className="text-[#808080] text-lg font-bold">
        {title}
      </span>

      <div className="flex-1 self-stretch" />

      {/* Ask Question */}
      <button
        className="flex shrink-0 items-center bg-[#00a6ff] text-left py-3 px-5 mr-[30px] gap-3 rounded-[5px] border-0"
        onClick={() => router.push("/ask")}
      >
        <img
          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/fixkm6rc_expires_30_days.png"
          className="w-[13px] h-[13px] object-fill"
        />
        <span className="text-white text-xs font-bold">
          Ask a question
        </span>
      </button>

      {/* User email */}
      {email && (
        <span className="text-sm text-gray-600 mr-6">
          {email}
        </span>
      )}

      {/* Logout */}
      {email && (
        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded mr-6 text-xs"
        >
          Logout
        </button>
      )}

      {/* Notification icon (unchanged) */}
      <img
        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/n9jzp7ev_expires_30_days.png"
        className="w-6 h-[31px] mr-[30px] object-fill"
      />

      {/* Notification bubble */}
      <div className="flex shrink-0 items-center gap-3.5">
        <div className="flex flex-col shrink-0 items-start bg-[url('https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/5dp2tsbj_expires_30_days.png')] bg-cover bg-center pb-[35px] pl-[34px]">
          <div className="flex flex-col items-start bg-[#00a6ff] py-[3px] px-[5px] rounded-[10px] border border-solid border-white">
            <span className="text-white text-[10px]">0</span>
          </div>
        </div>

        <img
          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/164s7jjt_expires_30_days.png"
          className="w-1.5 h-1.5 object-fill"
        />
      </div>

    </div>
  );
}