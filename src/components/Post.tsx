import React from "react";
import { Card, ListGroupItem } from "react-bootstrap";
import { PostInterface } from "../types/interfaces";

export const Post = ({ userId, id, title, body }: PostInterface) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
};
