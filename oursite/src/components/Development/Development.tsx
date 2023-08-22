import React from "react";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import img546819 from "../../images/img546819.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";

export function Development() {
  return (
    <Card className="contact sections">
      <Card.Header>
        <h1>Software Development</h1>
      </Card.Header>
      <Card.Body>
        <div className="subSection">
          <div className="float-start">
            <p>
              Having accumulated over two decades of experience in collaborating
              with county and state government bodies, we have honed our
              strategic expertise and technical know-how. This enables us to
              work seamlessly alongside our partners. Throughout our journey,
              our team has successfully engaged with various officials,
              including CIOs, county commisssioners, and project managers to
              implement robust solutions designed to meet the needs of each
              department.
            </p>
            <p>
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
          <div className="float-end ms-3 me-5">
            <img src={img546819} height="235px" />
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
