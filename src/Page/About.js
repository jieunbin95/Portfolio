import "./About.css";
import image from "../image/image.jpg";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faEnvelope,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { faVimeoV, faGithub } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  let navigate = useNavigate();

  return (
    <Container>
      <Row className="info">
        <Col lg={6}>
          <img className='info_img' src={image} />
        </Col>

        <Col lg={6}>
          <div className="info_about">
            <div className="info_name">
              <FontAwesomeIcon icon={faUser} />
              <span>빈지은</span>
            </div>
            <div className="info_num">
              <FontAwesomeIcon icon={faPhone} />
              <span>010.3125.4831</span>
            </div>
            <div className="info_email">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>bje0416@naver.com</span>
            </div>
            <hr />
            <div className="info_about2">
              <div className="certificates">
                <FontAwesomeIcon icon={faGraduationCap} />
                <span>Certificates</span>
              </div>
              <div className="info_certificates">-패스트캠프 교육과정 수료</div>
              <div className="info_certificates">
                -스파르타코딩클럽 웹개발 종합반 수료
              </div>
            </div>
            <hr />
            <div className='about_icon'>
              <a href="https://github.com/jieunbin95" className="github">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://velog.io/@bje0416" className="v-log">
                <FontAwesomeIcon icon={faVimeoV} />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
