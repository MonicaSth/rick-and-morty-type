import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useCharacterDetails from "../API/useCharacterDetails";
import { Character } from "../API/useCharacters";
import Episode from "./Episode";

const CardDetailsContainer = styled.div`
  border: 1px solid #ccc;
  background: rgb(34, 34, 34, 0.8);
  box-shadow: 1px 4px 7px #747494;
  border-radius: 10px;
  display: flex;
  flex-basis: 18%;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  color: white;
  min-width: 300px;
  // width: 80%;
  margin: 2% 10%;
  padding: 20px;

  .content {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;

    .badge {
      font-size: 1.25rem;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
    }
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
  // margin: 10px;
  // width: 90%
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
  const { id } = useParams<{ id: string }>();
  const [characterDetail, setCharacterDetail] = useState<Character | null>(
    null
  );
  const [episodeURL, setEpisodeURL] = useState<string[]>([]);
  const { results } = useCharacterDetails(id!);

  useEffect(() => {
    if (results) {
      setCharacterDetail(results);
      setEpisodeURL(results.episode);
    }
  }, [results]);

  const episodeNumbers = episodeURL.map((url) => {
    const parts = url.split("/");
    return parts[parts.length - 1];
  });

  return (
    <>
      {!characterDetail && <div>..Loading</div>}
      {characterDetail && (
        <CardDetailsContainer>
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
                {characterDetail.origin!.name}
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
