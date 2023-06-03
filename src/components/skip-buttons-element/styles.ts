import styled from "styled-components";
import * as Styles from "../../styles/variables";

export const ButtonsDiv = styled.div`
  width: 100vw;
  min-height: 10vh;
  background-color: ${Styles.white};

  position: fixed;
  bottom: 0;

  display: flex;
  justify-content: end;
  align-items: center;

  &.backButtonActive {
    justify-content: space-between;
  }

  &.hidden {
    display: none;
  }

  @media (min-width: 65em) {
    position: static;

    padding: 1rem 8rem;

    width: 100%;
    min-height: initial;
  }
`;

export const BackButton = styled.button`
  height: 5vh;
  width: 25vw;
  cursor: pointer;

  font-weight: 500;
  color: ${Styles.coolGray};

  margin-left: 5vw;

  border: none;
  border-radius: 0.5rem;
  background-color: transparent;

  display: none;

  &:hover {
    color: ${Styles.marineBlue};
  }

  &.active {
    display: inline;
  }

  @media (min-width: 65em) {
    width: 12vw;
    border-radius: 1rem;

    font-size: 1.6rem;

    margin-left: initial;
  }
`;

export const NextButton = styled.button`
  height: 5vh;
  width: 25vw;
  cursor: pointer;

  font-weight: 500;
  color: ${Styles.lightGray};

  margin-right: 5vw;

  border-radius: 0.5rem;
  background-color: ${Styles.marineBlue};

  &:hover {
    opacity: 0.9;
  }

  @media (min-width: 65em) {
    width: 12vw;
    border-radius: 1rem;

    font-size: 1.6rem;

    margin-right: initial;
  }
`;

export const SubmitButton = styled.button`
  height: 5vh;
  width: 25vw;
  cursor: pointer;

  font-weight: 500;
  color: ${Styles.white};

  margin-right: 5vw;

  border-radius: 0.5rem;
  background-color: ${Styles.purplishBlue};

  &:hover {
    opacity: 0.7;
  }

  @media (min-width: 65em) {
    width: 12vw;
    border-radius: 1rem;

    font-size: 1.6rem;

    margin-right: initial;
  }
`
