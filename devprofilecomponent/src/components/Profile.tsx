import React from "react";
import { Avatar } from "./Avatar.tsx";
import { Intro } from "./Intro.tsx";
import { SkillList } from "./SkillList.tsx";

export function Profile({ profile }) {
  return (
    <>
      <div className="body">
        <div className="card">
          <Avatar img={profile.avatarImg} />
          <div className="data">
            <Intro name={profile.name} description={profile.description} />
            <SkillList skills={profile.skills} />
          </div>
        </div>
      </div>
      ;
    </>
  );
}
