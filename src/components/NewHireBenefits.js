import React from "react";
import {Container, Row, Col, Card} from "react-bootstrap";

export default function NewHireBenefits() {

  const selected = (card) => {
    var basic = document.getElementById("basic");
    var standard = document.getElementById("standard");
    if (card === "basic") {
      basic.style.backgroundColor="#EFEFEF";
      basic.style.borderColor="black"
      standard.style.backgroundColor="#FFF";
      standard.style.borderColor="rgba(0,0,0,.125)"
    } else {
      basic.style.backgroundColor="#FFF";
      basic.style.borderColor="rgba(0,0,0,.125)"
      standard.style.backgroundColor="#EFEFEF";
      standard.style.borderColor="black"
    }
  }

  return (
    <div className="container benefits">
      <h3>Choose NewHire Benefits</h3>
      <p>
        A comprehensive benefits package is required for employees in B.C, <br/>
        you may choose one of our pre-designed packages or create a custom package.
      </p>
      <p>
        Minerva's partnerships help you provide the best value packages to your employees!
      </p>
      <br/>
      <Container>
        <Row>
        <Card id="basic" tag="a" className="bencard" style={{ width: '100%' }} onClick={() => selected("basic")} >
          <Row>
            <Col sm={3}>
            <div className="bencardhead">
              <h1>Basic</h1>
              <h2>Minimum requirement</h2>
              {/* <Button>Hi</Button> */}
            </div>
            </Col>
            <Col sm={4}>
            <div className="bencardcontent">
              <h6>Annual Leave</h6>
              <h5>2 weeks</h5>
              <h6>Medical insurance</h6>
              <h5>Standard</h5>
              <h6>Maternity / Paternity Leave</h6>
              <h5>Standard</h5>
            </div>
            </Col>
            <Col sm={4}>
            <div className="bencardcontent">
              <h6>Monthly Reimbursement</h6>
              <h5>$60 internet</h5>
            </div>
            </Col>
            <Col sm={1}>
            <div className="bencardend">
              <a>View All</a>
            </div>
            </Col>
          </Row>
        </Card>
        </Row>
        <br/>
        <Row>
        <Card id="standard" tag="a" className="bencard" style={{ width: '100%' }} onClick={() => selected("standard")} >
          <Row>
            <Col sm={3}>
            <div className="bencardhead">
              <h1>Standard</h1>
              <h2>Standard package</h2>
            </div>
            </Col>
            <Col sm={4}>
            <div className="bencardcontent">
              <h6>Annual Leave</h6>
              <h5>3 weeks</h5>
              <h6>Medical insurance</h6>
              <h5>Private</h5>
              <h6>Maternity / Paternity Leave</h6>
              <h5>Extended</h5>
            </div>
            </Col>
            <Col sm={4}>
            <div className="bencardcontent">
              <h6>Monthly Reimbursement</h6>
              <h5>$60 internet</h5>
              <h6>Annual Reimbursement</h6>
              <h5>$250 wellness</h5>
            </div>
            </Col>
            <Col sm={1}>
            <div className="bencardend">
              <a>View All</a>
            </div>
            </Col>
          </Row>
        </Card>
        </Row>
        <br/>
        <Row>
        <Card className="bencard" style={{ width: '100%' }} >
          <Row>
            <Col sm={3}>
            <div className="bencardhead">
              <h1>Custom</h1>
              <h2>Customize your package</h2>
            </div>
            </Col>
            <Col sm={8}>
            <div className="bencardcontent">
              <div className="bencardcustom">
                  <p>Choose template or add benefits</p>
              </div>
            </div>
            </Col>
            <Col sm={1}>
            </Col>
          </Row>
        </Card>
        </Row>
      </Container>
    </div>
  );
}
