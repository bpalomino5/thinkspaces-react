import React from "react";
import { Card, CardText, CardBody, CardLink, CardTitle } from "reactstrap";

const BoxSize = {
  height: "420px",
  width: "290px",
  display: "inline-block"
};

const ProjectCard = props => {
  let shortname = "#";
  let title = "Card title";
  let image =
    "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180";
  let text = " text here ";
  if (props.shortname) {
    shortname = "projects/" + props.shortname;
  }
  if (props.title) {
    title = props.title;
  }
  if (props.text) {
    text = props.text;
  }
  if (props.image) {
    image = props.image;
  }

  return (
    <Card style={BoxSize}>
      <CardBody>
        <CardTitle>{title}</CardTitle>
      </CardBody>
      <img width="288px" height="163px" src={image} alt="Card cap" />
      <CardBody>
        <CardText>{text}</CardText>
        <CardLink href={shortname}>View Project</CardLink>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
