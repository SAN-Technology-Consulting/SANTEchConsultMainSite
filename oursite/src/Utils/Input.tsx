import React, { forwardRef, useEffect, HTMLProps, useState } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import FormControl from "@mui/material/FormControl";
import { InputLabel, Select, MenuItem, FormGroup } from "@mui/material";
import NativeSelect, { NativeSelectProps } from "@mui/material/NativeSelect";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { useForm, Controller } from "react-hook-form";
import internal from "stream";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
export type InputProps = TextFieldProps & {
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  errormessage?: string | undefined;
  id: string;
  label: string;
  url?: string;
  isdropdown?: boolean;
  control?: any;
  onChange: any;
  isMoneyFormat?: boolean;
  disabled?: boolean;
  isTaxYear?: boolean;
};

export const Input = forwardRef((props: InputProps, ref) => {
  return (
    <Form.Group as={Col} controlId={props.id}>
      <TextField {...props} fullWidth inputRef={ref} />
      {props.errors && <p className="errorMessage">{props.errormessage}</p>}
    </Form.Group>
  );
});

export const parseNumber = (val: number | null): number => {
  var str = val + "";
  if (str !== null) {
    str = str.trim();
    let result = str.replace(/[^0-9]/g, "");
    if (/[,.]\d{2}$/.test(str)) {
      result = result.replace(/(\d{2})$/, ".$1");
    }
    return parseFloat(result);
  } else {
    return 0;
  }
};
