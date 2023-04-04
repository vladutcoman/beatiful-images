export type SimpleUser = {
  id: string;
  username: string;
};

export type Post = {
  id: string;
  created: string;
  mediaId: string;
  user: SimpleUser;
  likes: number;
  title: string;
  description: string;
};

export type PostApiResponse = {
  response: {
    posts: Post[];
    count: number;
  },
  success: boolean;
};

export type MediaUrls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
};

export type MediaStatistics = {
  downloads: number;
  views: number;
  likes: number;
  created: number;
};

export type Media = {
  id: string;
  type: string;
  statistics: MediaStatistics;
  urls: MediaUrls;
  owner: SimpleUser;
};

export type MediaApiResponse = {
  response: {
    media: Media;
  },
  success: boolean;
};

export type ProfileImages = {
  small: string;
  medium: string;
  large: string;
};

export type User = {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  profile_images: ProfileImages;
};

export type UserApiResponse = {
  response: {
    user: User;
  },
  success: boolean;
};
