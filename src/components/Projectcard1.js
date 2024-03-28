import { Col, Row } from "react-bootstrap";

export const ProjectCard1 = ({ title, description, imgUrl }) => {
  return (
    <Row className="justify-content-center">
      <Col size={10} sm={8} md={5}>
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>
    </Row>
  )
}
