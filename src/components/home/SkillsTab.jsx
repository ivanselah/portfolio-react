import React from 'react';
import Col from 'react-bootstrap/Col';
import SkillsBar from './SkillsBar';

function SkillsSection({ skills, isScrolled, isMain = false }) {
  return (
    <>
      {isMain ? <h1>메인</h1> : <h1>서브</h1>}
      {skills.map((skill, index) => (
        <SkillsBar
          index={index}
          buildUp={skills}
          key={`${skill.name}-${index}`}
          skill={`${skill.name} : ${skill.value}% `}
          value={skill.value}
          isScrolled={isScrolled}
          barColor={isMain ? 'danger' : 'info'}
        />
      ))}
    </>
  );
}

function SkillsTab({ skills, isScrolled }) {
  return (
    <>
      <Col xs={12} md={6}>
        <SkillsSection skills={skills.slice(0, Math.floor(skills.length / 2))} isScrolled={isScrolled} isMain={true} />
      </Col>

      <Col xs={12} md={6}>
        <SkillsSection skills={skills.slice(Math.floor(skills.length / 2), skills.length)} isScrolled={isScrolled} />
      </Col>
    </>
  );
}

export default SkillsTab;
