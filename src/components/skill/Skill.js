import React from "react";
import "./Skill.css";
import { Frontend } from "./Frontend";
import { SomeSkill } from "./SomeSkill";

export const Skill = () => {
  return (
    <section className="skills section " id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">MY Technical Level</span>

      <div className="skills__container container grid">
        <Frontend />
        <SomeSkill />
      </div>
    </section>
  );
};
