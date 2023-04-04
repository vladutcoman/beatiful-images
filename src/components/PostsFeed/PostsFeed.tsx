import React, { useEffect, useRef } from "react";
import { MediaPostData, useMediaPostData } from "../../hooks/useMediaPostData";
import { Loader } from "../Loader";
import { Post } from "./Post/Post";

export const PostReel: React.FC = () => {
  const { data: posts, loading } = useMediaPostData();
  const [stop, setStop] = React.useState(false);
  const [currentPost, setCurrentPost] = React.useState<MediaPostData | null>(
    posts[0]
  );
  let index = useRef(0);

  useEffect(() => {
    if (stop) return;
    const interval = setInterval(() => {
      index.current = index.current + 1;
      if (index.current === posts.length) {
        index.current = 0;
      }
      setCurrentPost(posts[index.current]);
    }, 6000);
    return () => clearInterval(interval);
  }, [posts, index, stop]);

  return (
    <section className="flex flex-col gap-24 items-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-72"
        onClick={() => setStop((prev) => !prev)}
      >
        {stop ? "Resume" : "Stop changes"}
      </button>
      <div className="flex flex-col gap-20 align-middle items-center justify-center sm:w-1000 xs:w-full">
        {!currentPost || loading ? (
          <Loader />
        ) : (
          <Post
            postDetails={currentPost as MediaPostData}
            key={currentPost?.id}
          />
        )}
      </div>
    </section>
  );
};
