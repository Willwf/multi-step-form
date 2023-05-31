import styled from "styled-components";
import * as Styles from "../../styles/variables";

export const FormSection = styled.section`
  &.step {
    display: none;
  }

  &.step.active {
    display: block;
  }
`;

export const FormSectionDiv = styled.div`
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

  &:hover {
    border-color: ${Styles.marineBlue};
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

export const PlanToggleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  margin-top: 1.5rem;
  border-radius: 0.7rem;
  background-color: ${Styles.alabaster};

  padding: 1.4rem;
`;

export const PlanTogglePeriod = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${Styles.coolGray};

  &.active {
    color: ${Styles.marineBlue};
  }
`;

export const PeriodToggleDiv = styled.div`
  display: flex;
  align-items: center;

  width: 4rem;
  height: 2rem;

  padding: 0.4rem;

  background-color: ${Styles.marineBlue};
  border-radius: 2rem;
`;

export const SelectorPeriodToggleDiv = styled.div`
  width: 1.2rem;
  height: 1.2rem;

  background-color: ${Styles.white};
  border-radius: 100%;

  transition: all 0.1s ease-out;

  &.active {
    transform: translate(2rem);
  }
`;
