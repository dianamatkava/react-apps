import { React } from "react";

interface AvatarProps {
  img: string;
}

export function Avatar(props: AvatarProps) {
  return (
    <>
      <img className="avatar" src={props.img} alt="Profile Avatar" />
    </>
  );
}
