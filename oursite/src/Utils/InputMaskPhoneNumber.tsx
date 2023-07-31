import React, { useState, useEffect, forwardRef } from "react";
import TextField from "@mui/material/TextField";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { InputProps } from "./Input";
import FormControl from "@mui/material/FormControl";
const InputMaskPhoneNumber = forwardRef((props: InputProps, ref) => {
  const handleChange = (e: any) => {
    if (!e) return;
    // const numbers = e.target.value.replace(/(\D)/g, "");
    const phoneValue = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{1,3})(\d{0,3})(\d{0,4})/);
    if (!phoneValue) return;

    e.target.value = !phoneValue[2]
      ? phoneValue[1]
      : `${phoneValue[1]}-${phoneValue[2]}${
          phoneValue[3] ? `${`-${phoneValue[3]}`}` : `${``}`
        }`;
    props.onChange(e);
  };

  return (
    <Form.Group as={Col} controlId={props.id}>
      <TextField
        {...props}
        onChange={handleChange}
        inputRef={ref}
        //defaultValue={props.defaultValue}
        //InputLabelProps={{ shrink: true }}
        fullWidth
      />
      {props.errors && <p className="errorMessage">{props.errormessage}</p>}
    </Form.Group>
  );
});

export default InputMaskPhoneNumber;
