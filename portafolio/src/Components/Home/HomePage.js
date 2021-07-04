import React from "react";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";
import Logo from "../Home/HomeImage.jpeg";
import "./HomePage.css";

function Home() {
  return (
    <div id="back" class="d-flex justify-content-center p-5">
      <Image
        id="image"
        width="400px"
        height="400px"
        thumbnail
        roundedCircle
        src={Logo}
        rounded
      />
      <div>
        <h2>
          <Badge variant="secondary">Hi,</Badge>
        </h2>
        <h2>
          <Badge variant="secondary">I'm Victor </Badge>
        </h2>
        <h2>
          <Badge variant="secondary">Web Developer</Badge>
        </h2>
      </div>
      <footer></footer>
    </div>
  );
}

export default Home;
