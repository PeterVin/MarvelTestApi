import styled from "styled-components";
import background from "../../shared/assets/images/background.jpeg";

export const Card = styled.div`
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
  width: 230px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
  padding: 15px;
  margin: 10px;
  overflow-wrap: break-word;
  background-image: url(${background});
  cursor: pointer;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  color: white;
  background-color: rgb(201, 18, 18);
  font-family: "Alegreya Sans SC", sans-serif;
`;

export const Container = styled.div`
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  margin: 2rem 0;
  padding: 0 2rem;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: auto;
  grid-gap: 2rem;
`;

export const PaginationContainer = styled.div`
  display: flex;
  padding: 0 0 2rem 0;
  justify-content: space-around;
`;
export const PaginationButton = styled.button`
  background-color: #f78f3f;
  font-size: 1.4em;
  color: white;
  font-weight: bold;
  padding: 0.6rem 1.6rem;
  border-radius: 0.6rem;
  cursor: pointer;
  user-select: none;
`;

export const SubTitle = styled.h3`
  padding-top: 5px;
`;
