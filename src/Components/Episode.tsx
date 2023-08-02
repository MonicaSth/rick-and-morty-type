import React, { useEffect, useState } from "react";
import useEpisodes, { EpisodeType } from "../API/useEpisodes";
import styled from "styled-components";

interface EpisodeProps {
  episodesNumbers: string[];
}

const CustomList = styled.ul`
  list-style: none; /* Remove default bullets */
  padding-left: 0; /* Remove default left padding */
`;
const EpisodeStyled = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: flex-start;
  justify-content: flex-start;
`;

const Episode: React.FC<EpisodeProps> = ({ episodesNumbers }) => {
  const [characterEpisodes, setCharacterEpisodes] = useState<EpisodeType[]>([]);
  const { episodes } = useEpisodes(episodesNumbers);

  useEffect(() => {
    if (episodes) {
      setCharacterEpisodes(episodes);
    }
  }, [episodes]);
  return (
    <EpisodeStyled>
      <h4>All episodes where the character appeared:</h4>
      {characterEpisodes.length !== 0 && (
        <CustomList>
          {characterEpisodes.map((ep) => (
            <li key={ep.id}>
              Episode nr {ep.id}: {ep.name}
            </li>
          ))}
        </CustomList>
      )}
      {characterEpisodes.length === 0 && <div>Loading...</div>}
    </EpisodeStyled>
  );
};

export default Episode;
