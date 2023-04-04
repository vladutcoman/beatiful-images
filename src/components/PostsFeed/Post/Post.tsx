import React from "react";
import { MediaPostData } from "../../../hooks/useMediaPostData";
import {
  getDaysDiff,
  getHoursDiff,
  getMonthsDiff,
  getTimeText,
  getWeeksDiff,
  getYearsDiff,
} from "../utils";
import { PostImage } from "./PostImage/PostImage";
import { PostLikes } from "./PostLikes/PostLikes";
import { PostText } from "./PostText/PostText";
import { UserDetails } from "./UserDetails/UserDetails";

type PostProps = {
  postDetails: MediaPostData;
};

export const Post: React.FC<PostProps> = ({ postDetails }) => {
  const getPostTime = () => {
    const now = new Date();
    const date = new Date(postDetails.postDate);
    const yearsDiff = getYearsDiff(date, now);
    const monthsDiff = getMonthsDiff(date, now);
    const weeksDiff = getWeeksDiff(date, now);
    const daysDiff = getDaysDiff(date, now);
    const hoursDiff = getHoursDiff(date, now);

    return getTimeText({
      yearsDiff,
      monthsDiff,
      weeksDiff,
      daysDiff,
      hoursDiff,
    });
  };

  return (
    <section className="flex justify-cente flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:flex-row w-4/5 backdrop-blur-2xl">
      <PostImage imageUrl={postDetails.imageUrl} />
      <article className="flex flex-col p-9 gap-32 md:w-1/2 bg-gray-100 sm:w-full">
        <UserDetails
          lastName={postDetails.lastName}
          firstName={postDetails.firstName}
          profilePictureUrl={postDetails.profilePictureUrl}
        />
        <PostText
          title={postDetails.title}
          description={postDetails.description}
        />
        <div className="flex w-full flex-col gap-5">
          <PostLikes likes={postDetails.likes} />
          <p className="flex w-full">{getPostTime()}</p>
        </div>
      </article>
    </section>
  );
};
