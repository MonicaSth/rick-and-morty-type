import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Character {
  id: number;
  image: string;
  name: string;
  status: "Dead" | "Alive" | "Unknown";
  location: {
    name: string;
  };
}

interface CardProps {
  page: string;
  results: Character[];
}
const CardContainer = styled(Link)`
  text-decoration: none;
  text-dark;
  border: 2px solid #0b5ed7;
  background:rgb(34, 34, 34,  0.5);
  border-radius: 10px;
  display: flex;
  flex-basis: 18%;
  flex-direction: column;
  justify-content: center;
  position: relative;
  color: white;
  width: 100%;
  margin: 7.5px;
  padding: 0;
  &:hover {
    cursor: pointer;
    
  }
`;

const CardImage = styled.img`
  border-radius: 10px 10px 0 0;
  width: 100%;
`;

const CardContent = styled.div`
  padding: 10px;
`;

const StatusBadge = styled.div<{ status: "Dead" | "Alive" | "Unknown" }>`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 17px;
  color: #fff;
  padding: 6px 12px;
  border-radius: 5px;
  background-color: ${({ status }) =>
    status === "Dead" ? "#dc3545" : status === "Alive" ? "#28a745" : "#6c757d"};
`;

const Card: React.FC<CardProps> = ({ page, results }) => {
  // this will be added when we make the api call...

  //   const [results, setResults] = useState<Character[] | null>(null);
  //   const API = "the api we need"
  //   useEffect(() => {
  //     fetch("API")
  //       .then((response) => response.json())
  //       .then((data) => setResults(data));
  //   }, []);

  return (
    <>
      {results ? (
        results.map((x) => (
          <CardContainer to={`${page}${x.id}`} key={x.id}>
            <CardImage src={x.image} alt="" />
            <CardContent>
              <div>{x.name}</div>
              <div>
                <div>Last Location</div>
                <div>{x.location.name}</div>
              </div>
            </CardContent>
            <StatusBadge status={x.status}>{x.status}</StatusBadge>
          </CardContainer>
        ))
      ) : (
        <div>No Characters Found :/</div>
      )}
    </>
  );
};

export default Card;
