import React from 'react';
import '../App.css';
import styled from  'styled-components';

export default function Pic(props){
    const {pic} = props;
    

    return (
        <Pics>
        <div id="imgDiv">
            <img id='pic1' src={pic} alt="Nasa Space"/>
        </div>
        </Pics>
    )
}

{/* {url.includes('youtube')?<div className ='player-wrapper'><ReactPlayer url={url} /></div>:<Pic pic={url}/>} */}
const Pics = styled.section`

    #pic1{
        border: 1px solid black;
        margin: 1rem 0 1rem 0 ;
        height: 60vh;
    }
    #imgDiv{
        border: 5px white;
        /* background-color: white; */
        margin: 5%;
    }

`;
