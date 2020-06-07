import React from "react";

type Props = {
  title: string;
  isActive?: boolean;
  type3?: Array<string>
  type4?: string[] // shorthand version of type 3
};

export const Head = ({ title, isActive = true }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {isActive && <h3>Active</h3>}
    </div>
  );
};
