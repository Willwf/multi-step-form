import styled from "styled-components";
import * as Styles from "../../styles/variables";

export const Form = styled.form``;

export const FormSectionsDiv = styled.div`
  width: 90vw;
  min-height: 40vh;

  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 11vh;

  background-color: ${Styles.white};

  padding: 3rem 2rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
`;

export const NextButtonDiv = styled.div`
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
    background-color: ${Styles.magnolia};
  }

  &.active {
    display: inline;
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
`;
