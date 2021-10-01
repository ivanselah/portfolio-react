import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron, Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

function Skills({ heading, hardSkills }) {
  const skillsTabRef = React.useRef();
  const [isScrolled, setIsScrolled] = React.useState(false);

  useScrollPosition(
    ({ currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <div id="skills">
      <Jumbotron ref={skillsTabRef} fluid className="jumbotron bg-white m-0">
        <Container className="p-5">
          <h1 ref={skillsTabRef} className="display-4 pb-5 text-center">
            {heading}
          </h1>
          <Tabs>
            <Tab eventKey="hard-skills">
              <Row className="pt-3 px-1">
                <SkillsTab skills={hardSkills} isScrolled={isScrolled} />
              </Row>
            </Tab>
          </Tabs>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Skills;
