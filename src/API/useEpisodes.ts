import { useEffect, useState } from "react";

export interface EpisodeType {
  id: number;
  name: string;
  air_date: string;
  characters: string[];
  episode: string;
  url: string;
  created: string;
}
const useCharacterDetails = (CharacterEpisodes: string[]) => {
  const [episodes, setEpisodes] = useState<EpisodeType[] | null>(null);
  const API = `https://rickandmortyapi.com/api/episode/${CharacterEpisodes}`;

  useEffect(() => {
    fetch(API)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network response was not ok, please try again later."
          );
        }
        return response.json();
      })
      .then((data) =>
        CharacterEpisodes.length === 1 ? setEpisodes([data]) : setEpisodes(data)
      )
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [API, CharacterEpisodes.length]);

  return {
    episodes,
  };
};
export default useCharacterDetails;
