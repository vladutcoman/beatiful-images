import React from "react";

type PostTextProps = {
  title: string;
  description: string;
};

export const PostText: React.FC<PostTextProps> = ({ title, description }) => {
  return (
    <div className="flex w-ful flex-col items-start">
      <h1 className="mt-0 mb-2 text-2xl font-medium leading-tight">{title}</h1>
      <div className="ml-1 inline-block w-full">
        <span className="sm:truncate block">{description}</span>
      </div>
    </div>
  );
};
