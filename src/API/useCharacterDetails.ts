import { useEffect, useState } from "react";
import { Character } from "./useCharacters";

const useCharacterDetails = (id: string) => {
  const [fetchedCharacterDetails, setFetchedCharacterDetails] =
    useState<Character | null>(null);
  const detailsApiEndpoint = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    fetch(detailsApiEndpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network response was not ok, please try again later."
          );
        }
        return response.json();
      })
      .then((data) => setFetchedCharacterDetails(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [detailsApiEndpoint]);

  return {
    fetchedCharacterDetails,
  };
};
export default useCharacterDetails;
