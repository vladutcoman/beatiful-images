import React from "react";

type UserDetailsProps = {
  firstName: string;
  lastName: string;
  profilePictureUrl: string;
};

export const UserDetails: React.FC<UserDetailsProps> = ({
  firstName,
  lastName,
  profilePictureUrl,
}) => {
  return (
    <div className="flex justify-end text-xs h-10 items-center gap-2 w-full">
      <span>
        {firstName} {lastName}
      </span>
      <img
        className="rounded-full object-contain max-w-fit h-10"
        src={profilePictureUrl}
        alt="profile-avatar"
      ></img>
    </div>
  );
};
