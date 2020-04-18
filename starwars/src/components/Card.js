import React from 'react';
import Image from "./Image";
import Name from "./Name";
import Id from "./Id";
import styled from 'styled-components';

const NameColor = styled.h3`
    margin: 0 auto;
`;

const IdColor = styled.p`
    text-color: darkgray;
`;

const PColor = styled.p`
    background-color: grey;
    width: fit-width;
    margin: 0 auto;
    padding: 2%;
`;

const MainDiv = styled.div`
    padding: 2%;
`;

const TopDiv = styled.div`
    background-color: green;
    width: 25%;
    margin: 0 auto;
    border: 1px solid orange;
    outline: 2px solid red;
`;

const NameIdDiv = styled.div`
    background: #ADD8E6;
    border: 1px solid yellow;
    outline: 2px solid black;
`;

const BottomDiv = styled.div`
    background-color: green;
    width: 25%;
    margin: 0 auto;
    border: 1px solid orange;
    outline: 2px solid red;
`;

const Card = props => {

    let paraArray =[`Status: ${props.data.status}`,
        `Species: ${props.data.species}`,
        `Gender: ${props.data.gender}`];
        //TODO: `Origin: ${props.data.origin}` doesn't work
        //  because it is nested another level
        //  does it require a separate axios call
    return (
      <MainDiv>
            <TopDiv>
                <Image imag={props.data.image} />
                <NameIdDiv>
                <NameColor><Name name={props.data.name}/></NameColor>
                <IdColor><Id id={props.data.id} /></IdColor>
                </NameIdDiv>
            </TopDiv>
        
            <BottomDiv>                
                {paraArray.map(para => <PColor>{para}</PColor>)}
            </BottomDiv>
      </MainDiv>
    );
}

export default Card;