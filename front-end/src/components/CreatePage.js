import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
} from "reactstrap";

const Createpage = ({ words, setWords }) => {
  return (
    <>
      <Form
        onSubmit={() => {
          setWords(words);
        }}
      >
        <FormGroup>
          <Input
            type="textarea"
            name="text"
            maxLength="50"
            value={words}
            id="exampleText"
            onChange={(e) => {
              console.log(words);
              console.log(e.target.value);
              setWords(e.target.value);
            }}
          />
        </FormGroup>
        <Button
          onSubmit={() => {
            setWords(words);
          }}
          type="submit"
        >
          제출하기
        </Button>
      </Form>
    </>
  );
};

export default Createpage;
