import React, { useEffect, useRef, useState } from "react";
import { Contact } from "../Contact";
import { Card, Container } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Input } from "../../Utils/Input";
import InputMaskPhoneNumber from "../../Utils/InputMaskPhoneNumber";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

export interface EmailProps {
  show: boolean;
  handleClose: any;
}

interface EmailEntryFormData {
  name: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  comments: string;
}

export function Email() {
  const SITE_KEY = "6Le1pGonAAAAAF-4ebGNTzZskEtzoxMjyQBG3ozj";

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const captchaRef = useRef<ReCAPTCHA>(null);
  const form = useRef(null);
  const schema = yup
    .object({
      name: yup.string().required("Field Required"),
      email: yup.string().email("Invalid Email").required("Field Required"),
      companyName: yup.string().required("Field Required"),
    })
    .required();

  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<EmailEntryFormData>({
    resolver: yupResolver(schema),
  });

  async function checkCatpcha(token: any) {
    if (token === null) {
      setIsSubmitDisabled(true);
    } else {
      setIsSubmitDisabled(false);
      // const axiosConfig = {
      //   headers: {
      //     Accept: "*/*",
      //     "Content-Type": "application/json",
      //   },
      // };

      // const client = axios.create(axiosConfig);
      // await client
      //   .post("http://localhost:2000/post", { token })
      //   .then((resp) => {
      //     if (resp.data === "Human") {
      //       setIsSubmitDisabled(false);
      //     } else {
      //       setIsSubmitDisabled(true);
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     toast.error("can't validate captcha");
      //     setIsSubmitDisabled(true);
      //   });
    }
  }
  function onSaveData(data: EmailEntryFormData) {
    const publicKey = `${process.env.REACT_APP_MAIL_KEY}`;
    emailjs
      .sendForm(
        "service_ekkuvfc",
        "template_rxipdzq",
        form!.current!,
        publicKey
      )
      .then(
        (res) => {
          toast.success("Email sent successfuly, thank you");
          reset();
          setIsSubmitDisabled(true);
          captchaRef?.current?.reset();
          //props.handleClose();
        },
        (err) => {
          console.log(err);
          toast.error(
            "Something wrong happened, we could not send the email, please try again later"
          );
        }
      );
  }

  return (
    // <Modal
    //   show={props.show}
    //   onHide={props.handleClose}
    //   backdrop="static"
    //   size="lg"
    //   centered
    // >
    <form onSubmit={handleSubmit(onSaveData)} ref={form}>
      <Card>
        <Card.Body>
          {/* <Modal.Header closeButton className="modal-header primary">
            <Modal.Title>Contact Us</Modal.Title>
          </Modal.Header>
          <Modal.Body> */}
          <Row>
            <Input
              id="name"
              type="text"
              label="* Full Name"
              variant="outlined"
              margin="normal"
              {...register("name")}
              errors={errors?.name}
              errormessage={errors?.name?.message}
            ></Input>
            <Input
              id="email"
              type="email"
              label="* E-Mail"
              variant="outlined"
              margin="normal"
              {...register("email")}
              errors={errors?.email}
              errormessage={errors?.email?.message}
            ></Input>
          </Row>
          <Row>
            <Input
              id="companyName"
              type="text"
              label="* Company"
              variant="outlined"
              margin="normal"
              {...register("companyName")}
              errors={errors?.companyName}
              errormessage={errors?.companyName?.message}
            ></Input>
            <InputMaskPhoneNumber
              id="phoneNumber"
              type="text"
              label="Phone Number"
              variant="outlined"
              margin="normal"
              {...register("phoneNumber")}
              control={control}
            />
          </Row>
          <Row>
            <Input
              id="comments"
              type="text"
              label="How can we help you?"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              {...register("comments")}
            ></Input>
          </Row>
          {/* </Modal.Body>
          <Modal.Footer> 
          <div style={{ width: 1500 }}>
            <div className="float-start">
              <ReCAPTCHA
                sitekey={SITE_KEY}
                ref={captchaRef}
                onChange={checkCatpcha}
              />
            </div>
            <div className="float-end mt-4">
              {/* <Button variant="secondary" onClick={props.handleClose}>
              <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>
              &nbsp;Close
            </Button> 
              <Button
                className="ms-2"
                variant="success"
                type="submit"
                disabled={isSubmitDisabled}
              >
                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>&nbsp;
                Send
              </Button>
            </div>
          </div>
          {/* </Modal.Footer> */}
        </Card.Body>
        <Card.Footer>
          <div className="float-start">
            <ReCAPTCHA
              sitekey={SITE_KEY}
              ref={captchaRef}
              onChange={checkCatpcha}
            />
          </div>
          <div className="float-end mt-4">
            <Button
              className="ms-2"
              variant="success"
              type="submit"
              disabled={isSubmitDisabled}
            >
              <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>&nbsp; Send
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </form>
    // </Modal>
  );
}
