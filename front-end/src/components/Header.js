import React from "react";
import { Badge, Button } from "reactstrap";

const Header = (props) => {
  return (
    <div className="Header">
      <h1>
        <Badge
          color="secondary"
          onClick={() => {
            props.setPage(0);
          }}
        >
          명언 제조기
        </Badge>
      </h1>
    </div>
  );
};

export default Header;
