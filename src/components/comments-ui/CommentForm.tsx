import Image from "next/image";

type FormType = "comment" | "reply" | "edit";

export default function CommentForm({ type = "comment" }: { type?: FormType }) {
  const buttonText =
    type === "comment" ? "SEND" : type === "reply" ? "REPLY" : "UPDATE";
  const placeholderText =
    type === "comment"
      ? "Add a comment..."
      : type === "reply"
      ? "Make a reply..."
      : "Edit this text...";

  return (
    <form className="bg-white p-4 flex flex-col gap-4 rounded-lg">
      <textarea
        placeholder={placeholderText}
        className="h-32 resize-none border-gray rounded-lg px-4 py-2 border-light-gray border-2 focus:outline-none focus:border-grayish-blue"
      />
      <div className="flex flex-row justify-between items-center">
        <Image
          height={40}
          width={40}
          alt="pfp"
          src="/images/avatars/image-amyrobson.png"
        />
        <button className="px-8 py-3 bg-moderate-blue text-white rounded-lg hover:opacity-80 focus:opacity-50">
          {buttonText}
        </button>
      </div>
    </form>
  );
}
