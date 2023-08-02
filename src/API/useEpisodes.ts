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
const useEpisodes = (CharacterEpisodes: string[]) => {
  const [episodes, setEpisodes] = useState<EpisodeType[] | null>(null);
  const episodeApiEndpoint = `https://rickandmortyapi.com/api/episode/${CharacterEpisodes}`;

  useEffect(() => {
    fetch(episodeApiEndpoint)
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
  }, [episodeApiEndpoint, CharacterEpisodes.length]);

  return {
    episodes,
  };
};
export default useEpisodes;
