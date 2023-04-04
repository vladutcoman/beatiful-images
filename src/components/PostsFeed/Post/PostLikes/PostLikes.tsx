import React from "react";

type PostLikesProps = {
  likes: number;
};

export const PostLikes: React.FC<PostLikesProps> = ({ likes }) => {
  return (
    <div className="flex w-full align-middle gap-3 text-xs">
      <img
        alt="like-avatar"
        src="./images/like.png"
        className="rounded-full object-contain max-w-fit h-5"
      />
      <span>
        {likes} person{likes > 1 ? "s" : null}
      </span>
    </div>
  );
};
