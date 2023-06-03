import styled from "styled-components";
import * as Styles from "../../styles/variables";

export const SubmittedDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  margin: 5rem 0;

  @media (min-width: 65em) {
    max-width: 40vw;

    margin: 12rem 0;
  }
`;

export const SubmittedIcon = styled.img`
  width: 6rem;
  height: 6rem;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
`;

export const Description = styled.p`
  font-size: 1.6rem;
  text-align: center;
  line-height: 2.5rem;
  color: ${Styles.coolGray};
`;
