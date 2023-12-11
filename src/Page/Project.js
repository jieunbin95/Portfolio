import React, { useState } from "react";
import styled from "styled-components";
import disney from "../image/disney-website.png";
import video from "../image/youtube.png";
import site from "../image/chatty.png";
import apple from "../image/ipad-website.png";
import shopping from "../image/shopping-website.png";
import movie from "../image/movie-website.png";
import portfolio from '../image/portfolio.png'
import guest from '../image/guest_book.png';

import Youtube from "../Component/Detail/youtube";
import Fashion from "../Component/Detail/Fashion";
import Iphone from '../Component/Detail/Iphone'
import Resume from "../Component/Detail/Resume";
import Airbnb from "../Component/Detail/Airbnb";
import Movie_netflix from "../Component/Detail/Movie_netflix";
import Movie_disney from "../Component/Detail/Movie_disney";
import Chat from "../Component/Detail/Chat";


const Project = () => {
  const [youtube,setYoutube]=useState(false)
  const [chatty,setChatty]=useState(false)
  const [ipad,setIpad]=useState(false)
  const [fashion,setFashion]=useState(false)
  const [disneymovie,setDisneyMovie]=useState(false)
  const [netflix,setNetflix]=useState(false)
  const [airbnb,setAirbnb]=useState(false)
  const [resume,setResume]=useState(false)
  

  return (
    <Container>
      <Item >
        <img alt="ipad" src={apple} />
        <Title className='item'>
          <h3>Apple-Website</h3>
          <button onClick={()=>setIpad(!ipad)}>Click</button>
        </Title>
      </Item>

      {ipad?<Iphone setOpenModal={setIpad}/>:''}

      <Item>
        <img alt="chatty" src={site} />
        <Title className='item'>
          <h3>Chatty-Website</h3>
          <button onClick={()=>setChatty(!chatty)}>Click</button>
        </Title>
      </Item>

      {chatty?<Chat setOpenModal={setChatty}/>:''}

      <Item>
        <img alt="shopping" src={shopping} />
        <Title className='item'>
          <h3>ShoppingMall-Website</h3>
          <button onClick={()=>setFashion(!fashion)}>Click</button>
        </Title>
      </Item>

      {fashion?<Fashion setOpenModal={setFashion}/>:''}

      <Item>
        <img alt="disney" src={disney} />
        <Title className='item'>
          <h3>Disney-Website</h3>
          <button onClick={()=>setDisneyMovie(!disneymovie)}>Click</button>
        </Title>
      </Item>

      {disneymovie?<Movie_disney setOpenModal={setDisneyMovie}/>:''}

      <Item>
        <img alt="movie" src={movie} />
        <Title className='item'>
          <h3>Netflix-Website</h3>
          <button onClick={()=>setNetflix(!netflix)}>Click</button>
        </Title>
      </Item>

      {netflix?<Movie_netflix setOpenModal={setNetflix}/>:''}

      <Item>
        <img alt="guest_book" src={guest} />
        <Title className='item'>
          <h3>GuestBook-App</h3>
          <button onClick={()=>setAirbnb(!airbnb)}>Click</button>
        </Title>
      </Item>

      {airbnb?<Airbnb setOpenModal={setAirbnb}/>:''}


      <Item>
        <img alt="youtube" src={video} />
        <Title className='item'>
          <h3>Youtube</h3>
          <button onClick={()=>setYoutube(!youtube)}>Click</button>
        </Title>
      </Item>

      {youtube?<Youtube setOpenModal={setYoutube}/>:''}


      <Item>
        <img alt="portfolio" src={portfolio} />
        <Title className='item'>
          <h3>Portfolio</h3>
          <button onClick={()=>setResume(!resume)}>Click</button>
        </Title>
      </Item>

      {resume?<Resume setOpenModal={setResume}/>:''}
    </Container>
  );
};

export default Project;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 165px;
  width: 1000px;
  margin: 0 auto 0;

  @media (max-width:900px){
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 135px;
    width:90%;
    margin: 0 auto 0;
    border-right: 2px solid #ddbdd58a;
    border-left: 2px solid #ddbdd58a;
  }


  @media (max-width:760px){
    width:90%;
    border-right: none;
    border-left: none;
  }
`;

const Item = styled.div`
  width: 250px;
  position: relative;
  transition: 1s;

  img {
    width: 250px;
    height:157px;
    position: absolute;
  }

  &:hover img{
    transition: 1s;
    opacity:0;
    visibility: hidden;
  }

  &:hover .item{
    transition: 1s;
    opacity:1;
    visibility: visible;
  }


  @media (max-width:900px){
    width:300px;
    height:150px;

    img{
      opacity:0;
      visibility: hidden;
    }

    .item{
      opacity:1;
      visibility: visible;
      position: relative;
      width: 250px;
      height: 110px;
      margin: 5px auto;
    }
  }

  @media (max-width: 768px) {
    width:100%;

    .item{
      opacity:1;
      visibility: visible;
      position: relative;
      width: 220px;
      height: 110px;
      margin: 5px auto;
    }
  }
`;

const Title = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width: 250px;
  height:157px;
  font-family: 'DM Serif Display', serif;
  background-color: #ddbdd58a;
  opacity:0;
  visibility: hidden;

  h3{
    font-size:25px;
    text-align:center;
    border-bottom:1px solid white;
    font-weight:bold;
  }

  button{
    border:none;
    background:linear-gradient(to right, transparent 50%, white 50%);
    left:0;
    background-size:201%;
    margin-top:10px;
    padding:10px;
    transition:.2s;
    font-size:25px;
    font-weight:bold;

    &:hover{
      background-position:-100%;
    }}

  
    @media (max-width:900px){
      h3{
        font-size:20px;
        border-bottom:2px solid white;
      }

      button{
        font-size:20px;
        padding: 10px;
      }
  }
`;
