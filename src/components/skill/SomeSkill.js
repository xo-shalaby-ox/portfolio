import React from "react";

export const SomeSkill = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Other Skills</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">PhotoShop</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Php</h3>
              <span className="skills__level">Begginer</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Begginer</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">SQL</h3>
              <span className="skills__level">Begginer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
