import React from "react";
import { faCogs, faConciergeBell } from "@fortawesome/free-solid-svg-icons";
import img1181403 from "../../images/img1181403.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";

export function Home() {
  return (
    <Card className="contact sections">
      <Card.Header>
        <h1>Our Services</h1>
      </Card.Header>
      <Card.Body>
        <div className="subSection">
          <div className="float-start">
            <p>
              {/*               We are dedicated to providing the most current software solutions
              specifically tailored to the needs of juvenile management. Our
              team of experts is committed to making a positive impact by
              streamlining processes and enhancing efficiency in the juvenile
              management system. We understand the unique challenges faced by
              juvenile justice systems, and our innovative technology is
              designed to help you manage and transform your operations
              effectively. 
 */}{" "}
              Our mission is to revolutionize the juvenile justice system in the
              state of Texas by providing a cutting-edge content management
              system tailored to the unique needs of juvenile probation, law
              enforcement, prosecutors, and county & clerk districts managing
              at-risk youth. Our state-of-the-art software is designed to
              empower these stakeholders with holistic data and
              information-sharing capabilities, enabling them to make informed
              decisions quickly and efficiently, leading to improved outcomes
              for the youth in their care.
            </p>
          </div>
          <div className="float-end me-5">
            <img src={img1181403} height="135px" />
          </div>
        </div>
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
