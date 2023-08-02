import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

interface Character {
  id: number;
  name: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
  gender: string;
  image: string;
  status: "Dead" | "Alive" | "Unknown";
  species: string;
}

const CardDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;

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

    .bg-danger {
      background-color: #dc3545;
    }

    .bg-success {
      background-color: #28a745;
    }

    .bg-secondary {
      background-color: #6c757d;
    }

    .fw-bold {
      font-weight: bold;
    }
  }
`;

const CardDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [fetchedData, updateFetchedData] = useState<Character | null>(null);

  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const data: Character = await response.json();
        updateFetchedData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [api]);

  if (!fetchedData) {
    return <div>Loading...</div>;
  }

  const { name, location, origin, gender, image, status, species } =
    fetchedData;

  return (
    <CardDetailsContainer>
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>
        <img className="img-fluid" src={image} alt="" />
        <div
          className={`badge bg-${
            status === "Dead"
              ? "danger"
              : status === "Alive"
              ? "success"
              : "secondary"
          } fs-5`}
        >
          {status}
        </div>
        <div className="content">
          <div>
            <span className="fw-bold">Gender: </span>
            {gender}
          </div>
          <div>
            <span className="fw-bold">Location: </span>
            {location?.name}
          </div>
          <div>
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          <div>
            <span className="fw-bold">Species: </span>
            {species}
          </div>
        </div>
      </div>
    </CardDetailsContainer>
  );
};

export default CardDetails;
