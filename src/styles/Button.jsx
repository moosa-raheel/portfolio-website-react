import { styled } from "styled-components";

export const Button = styled.button`
  margin-top: 1em;
  text-decoration: none;
  background: rgb(98, 84, 243);
  color: rgb(255, 255, 255) !important;

  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  a {
    color: rgb(255, 255, 255);
    font-weight: 500;
    font-size: 1.7rem;
    padding: 0.9em 1.8em;
    display: block;
  }
  &:hover {
    transform: scale(0.96);
  }
`;
