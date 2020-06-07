import React from 'react'

type Props = {
  // onClick(): string; // method returns string
  // onClick(): void; // method doesn't need to return anything
  // onClick(text: string): void; // method with params
  // onClick: () => void;
  // onClick: (text: string) => void; // function with params
  // onClick: (e: React.MouseEvent) => void; // basic mouse event
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; 
}

export const Button: React.FC<Props> = ({ onClick, children }) => {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  )
}
