import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useCharacterDetails from "../API/useCharacterDetails";
import { Character } from "../API/useCharacters";
import Episode from "./Episode";
import { useThemeContext } from "../Context/Theme-context";

const CardDetailsContainer = styled.div<{ themeIsLight: boolean }>`
  border: 1px solid #ccc;
  background-color: ${(props) =>
    props.themeIsLight ? "rgb(235, 235, 235, 0.7)" : "rgb(34, 34, 34, 0.8)"};
  color: ${(props) => (props.themeIsLight ? "black" : "white")};
  box-shadow: 1px 4px 7px #747494;
  border-radius: 10px;
  display: flex;
  flex-basis: 18%;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  min-width: 300px;
  margin: 2% 10%;
  padding: 20px;
  }
`;
const CloseLink = styled.button<{ themeIsLight: boolean }>`
  text-decoration: none;
  border: 1px solid #ccc;
  background-color: ${(props) =>
    props.themeIsLight ? "rgb(235, 235, 235, 0.9)" : "rgb(34, 34, 34, 0.9)"};
  color: ${(props) => (props.themeIsLight ? "black" : "white")};
  box-shadow: 1px 4px 7px #747494;
  border-radius: 35px;
  position: absolute;
  top: -30px;
  right: 25px;
  min-width: 42px;
  width: max-content;
  padding: 20px;
  padding-bottom: 10px;
  padding-top: 10px;
  transition: transform 0.3s ease;
  font-size: 30px;

  &:hover {
    cursor: pointer;
    font-weight: bold;
    border-color: rgb(50, 195, 34);
    box-shadow: 1px 4px 7px rgb(50, 195, 34);
    transform: scale(1.06);
  }
`;

const ImageAndNameStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2% 3%;
  align-content: center;
  justify-content: center;
  flex-basis: 42%;
`;
const CharacterDetails = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0% 5%;
  @media (max-width: 845px) {
    flex-direction: column;
  }
`;

const TagStyled = styled.span`
  font-weight: bold;
`;

const ImageStyled = styled.img`
  max-width: 430px;
  border-radius: 200px;
  @media (min-width: 1352px) {
    border-radius: 270px;
  }
`;

const DivStyled = styled.div`
  padding: 5px;
`;

const CardDetails: React.FC = () => {
  const { themeIsLight } = useThemeContext();
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const [characterDetail, setCharacterDetail] = useState<Character | null>(
    null
  );
  const [episodeURL, setEpisodeURL] = useState<string[]>([]);
  const { fetchedCharacterDetails } = useCharacterDetails(id!);

  useEffect(() => {
    if (fetchedCharacterDetails) {
      setCharacterDetail(fetchedCharacterDetails);
      setEpisodeURL(fetchedCharacterDetails.episode);
    }
  }, [fetchedCharacterDetails]);

  const episodeNumbers = episodeURL.map((url) => {
    const parts = url.split("/");
    return parts[parts.length - 1];
  });

  return (
    <>
      {!characterDetail && <div>..Loading</div>}
      {characterDetail && (
        <CardDetailsContainer themeIsLight={themeIsLight}>
          <CloseLink onClick={() => navigate(-1)} themeIsLight={themeIsLight}>
            x
          </CloseLink>
          <CharacterDetails>
            <ImageAndNameStyled>
              <h1>{characterDetail.name}</h1>
              <ImageStyled src={characterDetail.image} alt="" />
            </ImageAndNameStyled>
            <ImageAndNameStyled>
              <DivStyled>{characterDetail.status}</DivStyled>

              <DivStyled>
                <TagStyled>Gender: </TagStyled>
                {characterDetail.gender}
              </DivStyled>
              <DivStyled>
                <TagStyled>Location: </TagStyled>
                {characterDetail.location?.name}
              </DivStyled>
              <DivStyled>
                <TagStyled>Origin: </TagStyled>
                {characterDetail.origin.name}
              </DivStyled>
              <DivStyled>
                <TagStyled>Species: </TagStyled>
                {characterDetail.species}
              </DivStyled>
            </ImageAndNameStyled>
          </CharacterDetails>
          <Episode episodesNumbers={episodeNumbers} />
        </CardDetailsContainer>
      )}
    </>
  );
};

export default CardDetails;
