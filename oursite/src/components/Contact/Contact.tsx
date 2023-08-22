import React, { useState } from "react";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import img546819 from "../../images/img546819.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import { Email } from "../Email";
import Button from "@mui/material/Button";

export function Contact() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <Card className="contact sections">
      <Card.Header>
        <h1>Contact Us</h1>
      </Card.Header>
      <Card.Body>
        {/* <Email show={showModal} handleClose={closeModal}></Email> */}
        <p>
          Want to get in touch ? Just fill out the form below and we will be in
          touch with you shortly
        </p>
        <Email></Email>
        {/* <Button variant="contained" color="success" onClick={handleClick}>
          <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>{" "}
          &nbsp;&nbsp;Contact us
        </Button> */}
      </Card.Body>
      <Card.Footer>
        <span className="fs-8 float-end">
          <a href="https://www.pexels.com/license/">Pexels</a>&nbsp;
          <a href="https://icons8.com/">Icons8</a>&nbsp; v.
          {process.env.REACT_APP_VERSION}
        </span>
      </Card.Footer>
    </Card>
  );
}
