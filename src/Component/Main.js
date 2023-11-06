import React from "react";
import "./main.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <Container>
      <Row>
        <Col lg={5} className="main_text">
          <p>
            <FontAwesomeIcon className="icon" icon={faQuoteLeft} />
            일상에 마주하는 불편함을{" "}
            <span className='main_word'>새로운 가능성으로 만들겠습니다.</span>
            <br />
            문제해결 능력을 키워 보다{" "}
            <span className='main_word'>더 나은 프론트엔드 개발자로 성장하고 싶습니다.</span>
            <FontAwesomeIcon className="icon" icon={faQuoteRight} />
          </p>
        </Col>

        <Col lg={7}>
          <div className="checkbox">
            <div className="check_basic">
              <span className="text">Basic.</span><br/>
              <img src="https://kimminseoung.github.io/PortFolio/static/media/html.ff3cf75e3b7cbb4ea77c.png" />
              <img src="https://e7.pngegg.com/pngimages/893/87/png-clipart-web-development-html-cascading-style-sheets-css3-bootstrap-minimalist-resume-blue-angle-thumbnail.png" />
              <img src="https://images.velog.io/images/hanblueblue/post/3a0b0464-a4f4-44b9-820a-d14e47f98eec/js.png" />
            </div>


            <div>
              <span className="text">Library.</span><br/>
              <img src="https://kimminseoung.github.io/PortFolio/static/media/styled-component.bc3e0b79498ffebf7bf8.png"/>
              <img src="https://kimminseoung.github.io/PortFolio/static/media/react.428839d4924b447d4d50.png"/>
              <img src='https://blog.kakaocdn.net/dn/zglS0/btrvkHqDBrk/dRKgILYmxe5JR4Pz4Jj5lK/img.png'/>
              <img src='https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg'/>
              <img src='https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png'/>
            </div>


            <div>
              <span className="text">DataBase.</span><br/>
              <img src='https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png'/>
            </div>
          </div>
        </Col>
      </Row>
      <div></div>
    </Container>
  );
};

export default Main;
