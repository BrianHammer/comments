import Comment from "./Comment";

export default function Comments() {
  return (
    <>
      <Comment
        username={"amyrobson"}
        createdAt={"1 month ago"}
        content={
          "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
        }
        score={2}
        isReply={false}
        profilePicture="/images/avatars/image-amyrobson.png"
      />

      <Comment
        username={"amyrobson"}
        createdAt={"1 month ago"}
        content={
          "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
        }
        score={12}
        isReply={true}
        profilePicture="/images/avatars/image-amyrobson.png"
      />

      <Comment
        username={"amyrobson"}
        createdAt={"1 month ago"}
        content={
          "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
        }
        score={34}
        isReply={false}
        profilePicture="/images/avatars/image-amyrobson.png"
      />
    </>
  );
}
