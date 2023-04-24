import styled from "styled-components";
import * as Styles from "../../styles/variables";

export const FormDiv = styled.div``;

export const NextButtonDiv = styled.div`
  width: 100vw;
  min-height: 10vh;
  background-color: ${Styles.white};

  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: end;
  align-items: center;
`;

export const NextButton = styled.button`
  height: 5vh;
  width: 25vw;
  cursor: pointer;

  font-weight: 500;
  color: ${Styles.magnolia};

  margin-right: 5vw;

  border-radius: 0.5rem;
  background-color: ${Styles.marineBlue};
`;
