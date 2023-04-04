import React from "react";

export const Loader: React.FC = () => {
  return (
    <div
      className="flex h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.225em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
};
