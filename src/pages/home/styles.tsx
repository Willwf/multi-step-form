import styled from "styled-components";
import * as Styles from "../../styles/variables";

export const Form = styled.form`
  @media (min-width: 65em) {
    display: flex;

    padding: 1rem;
    border-radius: 1rem;

    background-color: ${Styles.white};

    .formContent {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

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

  @media (min-width: 65em) {
    position: static;

    height: initial;
    width: initial;

    padding: 3rem 8rem;
    border-radius: 0;
    box-shadow: none;
  }
`;
