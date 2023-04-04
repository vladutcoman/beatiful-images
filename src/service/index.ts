import { Media, MediaApiResponse, Post, PostApiResponse, User, UserApiResponse } from "./types";

const API_KEY = 'ZSTYF0GBSSF0l3Ou6DTPE';
const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
};

const getUrl = (path: string) => `https://apis.slstice.com/mock/${path}?api_key=${API_KEY}&limit=5`;

export const getPosts = async (): Promise<Post[] | null> => {
  try {
    const response = await fetch(getUrl('posts'), {
      headers,
    });

    const data: PostApiResponse = await response.json();
    return data.success ? data.response.posts : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getMedia = async (mediaId: string): Promise<Media | null> => {
  try {
    const response = await fetch(getUrl(`medias/${mediaId}`), {
      headers,
    });

    const data: MediaApiResponse = await response.json();
    return data.success ? data.response.media : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getUser = async (username: string): Promise<User | null> => {
  try {
    const response = await fetch(getUrl(`users/${username}`), {
      headers,
    });

    const data: UserApiResponse = await response.json();

    return data.success ? data.response.user : null;
  } catch (error) {
    console.error(error);
    return null;
  }
}