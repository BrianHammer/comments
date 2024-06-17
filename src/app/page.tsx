"use client";

import Image from "next/image";
import Comments from "@/components/comments-ui/Comments";
import CommentForm from "@/components/comments-ui/CommentForm";

export default function Home() {
  return (
    <main className="bg-very-light-gray w-full min-h-screen">
      <div className="w-full h-full flex flex-col gap-6 px-6 py-8">
        <Comments />
        <CommentForm />
      </div>
    </main>
  );
}
