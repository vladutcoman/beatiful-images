import React from "react";
import "./PostImage.css";

type PostImageProps = {
  imageUrl: string;
};

export const PostImage: React.FC<PostImageProps> = ({ imageUrl }) => {
  return (
    <section className="gallery-section flex items-center justify-center md:w-1/2 sm:w-full">
      <div
        className="blurry-bg bg-cover bg-center flex justify-center items-center backdrop-blur-xl"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <img
        className="h-96 bg-opacity-100 object-contain rounded-t-lg md:h-96 md:w-full md:rounded-none md:rounded-l-lg"
        src={imageUrl}
        alt="post"
      />
    </section>
  );
};
