import React from 'react';
import styled from 'styled-components';
import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
  } from "react-share";

  import {
    EmailIcon,
    FacebookIcon,
    TwitterIcon,
  } from "react-share";

export default function Footer(){

    return (
        <div>
            <Footers>
            <Shares> 
            <P>Share today's photo: </P>
            </Shares>
            <Icons>
        <Box> EMAIL 
            <EmailShareButton url={window.location.href}>
            <EmailIcon size={50} round={false} iconFillColor="white" bgStyle={{ fill: 'none' }}  /> 
            </EmailShareButton>
        </Box>
        <Box> SHARE
            <FacebookShareButton url={window.location.href}>
            <FacebookIcon size={50} round={false} iconFillColor="white" bgStyle={{ fill: 'none' }}   />
            </FacebookShareButton>  
        </Box>
        <Box> TWEET
            <TwitterShareButton url={window.location.href}>
            <TwitterIcon size={50} round={false} iconFillColor="white" bgStyle={{ fill: 'none' }}    />
            </TwitterShareButton>
        </Box>

             </Icons>
             <div>
                <a id="resume-link" href="https://resume.creddle.io/resume/4uxc0m7zngm">Like what you see? My Resume</a>
            </div>
            </Footers>
        </div>
    )
}

const Shares = styled.section``;

const P = styled.p``;

const Icons = styled.section`
display: flex;
margin: 5% 5% 2% 0%;
width: 100%;
justify-content: space-evenly;
align-items: center;

#resume-link{
    color: white;
}

`;

const Box = styled.section`
//     background-color: white;
//     padding-left: 5%;
`;
const Footers = styled.section``;