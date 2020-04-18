import React from 'react';
import Image from "./Image";
import Name from "./Name";
import Id from "./Id";
import styled from 'styled-components';

const NameColor = styled.h3`
    background-color: grey;
    width: 25%;
    margin: 0 auto;
`;

const PColor = styled.p`
    background-color: grey;
    width: 25%;
    margin: 0 auto;
`;

const MainDiv = styled.div`
    background-color: purple;
`;

const DivColor = styled.div`
    background-color: green;
    width: 25%;
    margin: 0 auto;
`;

const Main = props => {

    return (
      <MainDiv>
          <DivColor class="top">
                {/* we will revisit our map later - perhaps it goes in app */}
                {/*character.map(element => {
                    return {element};
                })*/}
                <Image imag={props.data.image} />
                <NameColor><Name name={props.data.name}/></NameColor>
            </DivColor>
        
            <DivColor class="bottom">
                <PColor><Id id={props.data.id} /></PColor>
                <PColor>Status: {props.data.status}</PColor>
                {/* "Species:" {character.species}
                "Gender:" {character.gender}
                "Origin:" {character.origin} */}
            </DivColor>
      </MainDiv>
    );
}

export default Main;