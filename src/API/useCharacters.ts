import { useEffect, useState } from "react";

interface Result {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: Character[];
}
export interface Character {
  id: number;
  image: string;
  name: string;
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: { name: string; url: string };

  status: "Dead" | "Alive" | "Unknown";
  location: {
    name: string;
    url: string;
  };
  episode: string[];
  url: string;
  created: string;
}

const useCharacters = (
  pageNumber: number,
  CharacterName: string,
  CharacterStatus: string
) => {
  const [fetchedCharacters, setFetchedCharacters] = useState<Result | null>(
    null
  );
  const characterApiEndpoint = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${CharacterName}&status=${CharacterStatus}`;

  useEffect(() => {
    fetch(characterApiEndpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network response was not ok, please try again later."
          );
        }
        return response.json();
      })
      .then((data) => setFetchedCharacters(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [characterApiEndpoint]);

  return {
    fetchedCharacters,
  };
};
export default useCharacters;
