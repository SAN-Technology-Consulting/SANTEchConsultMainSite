import React from "react";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import img546819 from "../../images/img546819.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";

export function Development() {
  return (
    <Card className="contact sections">
      <Card.Header>
        <h1>
          <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>&nbsp;Software
        </h1>
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
              including CIOs, County Commisssioners and County Project Managers.
            </p>
            <p>
              Optimize your internal processes, enhance data management, and
              save valuable time through the implementation of paperless
              workflows. Address your business-critical challenges with greater
              efficiency and effectiveness by leveraging our expertise in custom
              application development.
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
