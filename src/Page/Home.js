import './home.css'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../image/image.jpg'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faPhone,faEnvelope,faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import { faVimeoV,faGithub } from '@fortawesome/free-brands-svg-icons'
import Main from '../Component/Main';
import Project from './Project';

const Home = () => {
  let navigate=useNavigate()

  return (
    <>
    <div className='main'>
      <div className='intro'>
        <h1><span className='frontend'>Web Front-end Developer.</span> </h1>
        <h1><span className='name'>Vin JIEun.</span></h1>
      </div>

      <div className="sub_menu">
       <div className="home"><a href='#home'>Home</a></div>
        <div className="about"><a href='#about'>About</a></div>
        <div className="portfolio"><a href='#project'>Project</a></div>
      </div>

      <div className='slide'>
        <Swiper
        navigation
        slidesPerView={1}
        loop
        grabCursor={true}
        pagination={{
          clickable: true
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >

        <SwiperSlide id='home'>
          <Main/>
        </SwiperSlide>

        <SwiperSlide id='about'>
          <Container >
            <Row className="info">
              <Col lg={6}>
                <img style={{width:'80%'}} src={image}/>
              </Col>


            <Col lg={6}>
              <div className='info_about'>
                <div className="info_name"><FontAwesomeIcon icon={faUser}/><span>빈지은</span></div>
                <div className="info_num"><FontAwesomeIcon icon={faPhone}/><span>010.3125.4831</span></div>
                <div className="info_email"><FontAwesomeIcon icon={faEnvelope}/><span>bje0416@naver.com</span></div>
             <hr/>
            <div className='info_about2'>
              <div className="certificates"><FontAwesomeIcon icon={faGraduationCap}/><span>Certificates</span></div>
              <div className="info_certificates">-패스트캠프 교육과정 수료</div>
              <div className="info_certificates">-스파르타코딩클럽 웹개발 종합반 수료</div>
            </div>
             <hr/>
             <div>
              <a href='https://github.com/jieunbin95' className='github'><FontAwesomeIcon icon={faGithub}/></a>
              <a href='https://velog.io/@bje0416' className='v-log'><FontAwesomeIcon icon={faVimeoV}/></a>
             </div>
            </div>
             
            </Col>
            </Row>
          </Container>
        </SwiperSlide>

        <SwiperSlide id='project'>
          <Project/>
        </SwiperSlide>
       </Swiper>
      </div>
    </div>
    </>

    
  )
}

export default Home