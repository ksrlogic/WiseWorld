import React from "react";
import { Button } from "reactstrap";

const CreateBtn = (props) => {
  return (
    <div className="create-btn">
      <Button
        onClick={() => {
          props.setPage(1);
        }}
        color="primary"
        size="lg"
        block
      >
        명언 등록하기
      </Button>
    </div>
  );
};

export default CreateBtn;
