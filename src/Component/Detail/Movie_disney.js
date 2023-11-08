import React, { useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,faCheck } from '@fortawesome/free-solid-svg-icons'
import useOnClickOutside from '../../hook/useOnClickOutside'
import disney from '../../image/disney-website.png'
import { Col, Row } from 'react-bootstrap'

const Movie_disney = ({setOpenModal}) => {
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
        <h3>Disney-Website</h3>
        <img alt='disney' src={disney}/>
        </Col>

        <Col className='detail_text'>
        <div className='detail_explain'>
          <FontAwesomeIcon icon={faCheck}/>
          Description
        </div>
        <p>
        React를 활용한 디즈니 플러스 클론코딩입니다. Axios를 통해 API를 호출하여 영화정보를 랜더링하였고,
        Redux Toolkit을 사용하여 Redux 개발환경을 구축하였습니다. 또한 Firebase 인증기능을 사용하여 계정생성, 로그인, 로그아웃을 구현하였습니다.
        </p>
        <div className='detail_skill'>
          <FontAwesomeIcon icon={faCheck}/>
          Use Skill
        </div>
        <ul> 
        <li>React</li>
        <li>React-hook</li>
        <li>React-router</li>
        <li>Redux-toolkit</li>
        <li>Fire-base</li>
        <li>Styled-Components</li>
        <li>Axios</li>
        </ul>
        <div><FontAwesomeIcon icon={faCheck} /><a href='https://react-disney-plus-website.firebaseapp.com/'>Demo-Site</a></div>
        <div><FontAwesomeIcon icon={faCheck}/><a href='https://github.com/jieunbin95/react-disney-website/tree/master'>Source Code</a></div>
        </Col>  
      </Row>
    </Container>
  )
}

export default Movie_disney

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

    ul{
      width:90%;
      height:20%;
      display:flex;
      flex-direction:row;
      flex-wrap:wrap;
      justify-content:flex-start;
      border-top:1px solid #ddbdd5;

      li{
        font-size:15px;
        margin:20px 20px 0 0;
      }
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