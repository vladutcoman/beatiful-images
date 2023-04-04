import React from "react";
import { render } from "@testing-library/react";
import { PostLikes } from "./PostLikes";

describe("PostLikes", () => {
  it("renders likes count correctly", () => {
    const likes = 3;
    const { getByText } = render(<PostLikes likes={likes} />);
    expect(getByText(`${likes} persons`)).toBeInTheDocument();
  });

  it("renders singular 'person' when likes count is 1", () => {
    const likes = 1;
    const { getByText } = render(<PostLikes likes={likes} />);
    expect(getByText(`${likes} person`)).toBeInTheDocument();
  });
});
