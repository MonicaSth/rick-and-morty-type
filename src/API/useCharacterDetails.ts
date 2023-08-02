import { useEffect, useState } from "react";
import { Character } from "./useCharacters";

const useCharacterDetails = (id: string) => {
  const [results, setResults] = useState<Character | null>(null);
  const API = `https://rickandmortyapi.com/api/character/${id}`;

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
      .then((data) => setResults(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [API]);

  return {
    results,
  };
};
export default useCharacterDetails;
