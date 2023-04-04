import React, { useEffect, useState } from "react";
import { getMedia, getPosts, getUser } from "../service";

export type MediaPostData = {
  imageUrl: string;
  firstName: string;
  lastName: string;
  profilePictureUrl: string;
  postDate: string;
  likes: number;
  title: string;
  description: string;
  id: string;
};

/**
 * Custom hook to fetch media post data from 3 different endpoints: posts, users and media and return the data
 */
export const useMediaPostData = () => {
  const [data, setData] = useState<MediaPostData[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const fetchedData: MediaPostData[] = [];
    const posts = await getPosts();
    if (posts) {
      for (const post of posts) {
        const [user, media] = await Promise.all([
          getUser(post.user.username),
          getMedia(post.mediaId),
        ]);
        fetchedData.push({
          imageUrl: media?.urls?.full || "",
          firstName: user?.first_name || "",
          lastName: user?.last_name || "",
          profilePictureUrl: user?.profile_images?.small || "",
          postDate: post.created,
          likes: post.likes,
          title: post.title,
          description: post.description,
          id: post.id,
        });
      }
      setData(fetchedData);
      setLoading(false);
    } else {
      setLoading(false);
      setError("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, loading };
};
