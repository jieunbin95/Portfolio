import React, { useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,faCheck } from '@fortawesome/free-solid-svg-icons'
import useOnClickOutside from '../../hook/useOnClickOutside'
import video from '../../image/youtube.png'
import { Col, Row } from 'react-bootstrap'

const Youtube=({setOpenModal}) => {
  const ref=useRef(null)
  useOnClickOutside(ref,()=>{
    setOpenModal(false)
  })

  return (
    <Container ref={ref}>
      <div className='close-btn' onClick={() => setOpenModal(false)}>
          <FontAwesomeIcon icon={faXmark}  className='x-icon'/>
      </div>
      <Row>  
        <Col>
        <h3>Youtube</h3>
        <img alt='Youtube' src={video}/>
        </Col>

        <Col className='detail_text'>
        <div className='detail_explain'>
          <FontAwesomeIcon icon={faCheck}/>
          Description
        </div>
        <p>
        Vite툴을 이용해 만든 Youtube클론 코딩입니다. mainPage, VideoPage, searchVideoPage로 구성되어있으며, 
        axios, dayjs, react-icons, react-router-dom, tooltip, react-youtube, SASS(SCSS)를 사용하였습니다.
        </p>
        <div className='detail_skill'>
          <FontAwesomeIcon icon={faCheck}/>
          Use Skill
        </div>
        <p className='skill'> Vite <span style={{margin:'0 30px 0'}}>SASS(SCSS)</span> </p>
        <div><FontAwesomeIcon icon={faCheck} /><a href='https://clinquant-crumble-647cd3.netlify.app/'>Demo-Site</a></div>
        <div><FontAwesomeIcon icon={faCheck}/><a href='https://github.com/jieunbin95/react-sass-youtube'>Source Code</a></div>
        </Col>  
      </Row>
    </Container>
  )
}

export default Youtube

const Container=styled.div`
  position: absolute;
  top:0;
  width: 990px;
  background-color:white;
  height:540px;
  z-index:1;
  transition: .2s;

  .close-btn{
    text-align: end;
    width: 30px;
    height: 30px;
    right: 10px;
    top: 10px;
    position: absolute;
    transition: 0.5s;

    &:hover{
      color:rgba(0, 128, 0, 0.586);
    }

    .icon{
      font-size:20px;
    }
  }

  h3{
    font-family: 'DM Serif Display', serif;
    margin-left:10px;
    margin-top:20px;
    font-weight:bold;
    width:300px;
    background: linear-gradient(to top, #ddbdd5 60%, transparent 40%); 
  }

  img{
    width:500px;
    height:80%;
    margin:20px 10px 0;
  }

  .detail_text{
    font-family: 'DM Serif Display', serif;
    margin-top:70px;
    font-size:20px;
    font-weight:bold;

    p{
      width:90%;
      height:40%;
      border-top:1px solid #ddbdd5;
      font-size:16px;
    }

    .skill{
      width:90%;
      height:10%;
      display:flex;
      flex-direction:row;
      justify-content:start;
    }

    div{
      background: linear-gradient(to top, #ddbdd5 60%, transparent 40%); 
      width:140px;
      margin-bottom:20px;
    }

    a{
    text-decoration:none;
     transition: .2s; 
     color:rgba(55, 55, 55, 0.695);

     &:hover{
      color:rgba(0, 128, 0, 0.586);
     }
    }

  }

  @media (max-width:900px){
    position: absolute;
    top:0;
    width: 89%;
    background-color:white;

    .close-btn{
      top:20px;
      right:10px;
      text-align:center;

      &:hover{
        color:rgba(0, 128, 0, 0.586);
      }
  
      .x-icon{
        font-size:20px;
      }
    }

    img{
      width:0;
    }

    .detail_text{
      height: 500px;
      position: absolute;
      width: 90%;
      left: 10px;

      p{
        border-top:0;
        padding:5px 0;
      }
    }
  }

`