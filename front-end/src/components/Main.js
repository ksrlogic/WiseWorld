import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const Block = (props) => {
  return (
    <div className="wise">
      <Card>
        <CardImg
          top
          className="image"
          height="auto"
          src="https://source.unsplash.com/user/erondu/1600x900"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>명언을 등록해보세요.</CardTitle>
          <CardSubtitle>명언.</CardSubtitle>
          <CardText>
            힘든 누군가를 위해. 재충전이 필요한 누군가를 위해.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

const Inside = () => {};

const Main = () => {
  return (
    <div className="Main">
      <Block />
    </div>
  );
};

export default Main;
