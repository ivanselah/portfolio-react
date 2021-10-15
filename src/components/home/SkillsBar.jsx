import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function SkillsBar({ index, buildUp, skill, value, isScrolled }) {
  return (
    <div style={{ width: "95%" }}>
      {index === 3 && buildUp[3].name === "TypeScript" ? (
        <p className="lead mb-1 mt-2 buildUp">{skill}</p>
      ) : (
        <p className="lead mb-1 mt-2">{skill}</p>
      )}
      <ProgressBar
        className={!isScrolled ? "progress" : " progress-bar-animation"}
        now={value}
        title={value}
      />
    </div>
  );
}

export default SkillsBar;
