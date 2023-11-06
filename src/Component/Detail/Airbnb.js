import React, { useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,faCheck } from '@fortawesome/free-solid-svg-icons'
import useOnClickOutside from '../../hook/useOnClickOutside'
import guest from '../../image/guest_book.png'
import { Col, Row } from 'react-bootstrap'

const Airbnb = ({setOpenModal}) => {
  const ref=useRef(null)
  useOnClickOutside(ref,()=>{
    setOpenModal(false)
  })

  return (
    <Container ref={ref}>
      <div className='close-btn' >
          <FontAwesomeIcon icon={faXmark} onClick={() => setOpenModal(false)} className='icon'/>
      </div>
      <Row>  
        <Col>
        <h3>Guest-Book</h3>
        <img alt='guest_book' src={guest}/>
        </Col>

        <Col className='detail_text'>
        <div className='detail_explain'>
          <FontAwesomeIcon icon={faCheck}/>
          Description
        </div>
        <p>Next.js를 이용하여 서버 사이드 렌더링의 웹사이트를 구현하였습니다.
           Next.js가 제공하는 Link, Router를 이용하였고, Json-server를 사용하여 RESTful API를 호출하였습니다.
        </p>
        <div className='detail_skill'>
          <FontAwesomeIcon icon={faCheck}/>
          Use Skill
        </div>
        <p className='skill'> Javascript  <span style={{margin:'0 30px 0'}}>Next.js</span></p>
        <div><FontAwesomeIcon icon={faCheck} /><a href='https://github.com/jieunbin95/guest_book'>Demo-Site</a></div>
        <div><FontAwesomeIcon icon={faCheck}/><a href='https://github.com/jieunbin95/guest_book'>Source Code</a></div>
        </Col>  
      </Row>
    </Container>
  )
}

export default Airbnb

const Container=styled.div`
  position: absolute;
  top:0;
  width: 1100px;
  background-color:white;
  height:540px;
  z-index:1;
  transition: .2s;

  .close-btn{
    text-align:end;
    width:30px;
    height:30px;
    right:0;
    position:absolute;
    transition:.5s;

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
    margin:10px 10px 0;
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

`