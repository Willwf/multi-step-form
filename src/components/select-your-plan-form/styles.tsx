import styled from "styled-components";
import * as Styles from "../../styles/variables";

export const Main = styled.main`
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

export const FormSection = styled.section``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormTitle = styled.h1`
  font-size: 2.4rem;
  color: ${Styles.marineBlue};
`;

export const FormSubtitle = styled.p`
  font-size: 1.6rem;
  color: ${Styles.coolGray};
  line-height: 2.5rem;
  font-weight: 400;
`;

export const PlanOptionDiv = styled.div`
  border: 1px solid ${Styles.lightGray};
  border-radius: 0.7rem;

  padding: 1.5rem;

  display: flex;
  align-items: flex-start;
  gap: 1rem;

  & img {
    width: 14%;
  }

  &.selected {
    border-color: ${Styles.marineBlue};
    background-color: ${Styles.alabaster};
  }
`;

export const PlanOptionInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const PlanOptionTitle = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${Styles.marineBlue};
`;

export const PlanOptionPrice = styled.p`
  font-size: 1.3rem;
  color: ${Styles.coolGray};
`;

export const PlanOptionGift = styled.p`
  font-size: 1.2rem;
  color: ${Styles.marineBlue};
`;

export const PlanToggleDiv = styled.div``;
