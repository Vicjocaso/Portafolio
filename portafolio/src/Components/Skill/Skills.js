import React from "react";
import Badge from "react-bootstrap/Badge";
import "./skill.css";

function Skill() {
  return (
    <div id="back" class="p-5">
      <h2 class="d-flex justify-content-center p-5">
        <Badge variant="secondary">Skill Page</Badge>
      </h2>
      <div class="d-flex justify-content-center p-5">
        <h3 class="p-3">
          <Badge variant="secondary">JavaScript</Badge>
        </h3>
        <h3 class="p-3">
          <Badge variant="secondary">React.JS</Badge>
        </h3>
        <h3 class="p-3">
          <Badge variant="secondary">Html</Badge>
        </h3>
        <h3 class="p-3">
          <Badge variant="secondary">Css</Badge>
        </h3>
      </div>
    </div>
  );
}

export default Skill;
