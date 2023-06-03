import styled from "styled-components";
import * as Styles from "../../styles/variables";

export const FormSection = styled.section`
  &.step {
    display: none;
  }

  &.step.active {
    display: block;
  }

  @media (min-width: 65em) {
    padding-bottom: 5rem;
  }
`;

export const FormSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 65em) {
    gap: 2rem;
  }
`;

export const FormTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 65em) {
    gap: 1.5rem;
  }
`;

export const FormTitle = styled.h1`
  font-size: 2.4rem;
  color: ${Styles.marineBlue};

  @media (min-width: 65em) {
    font-size: 3rem;
  }
`;

export const FormSubtitle = styled.p`
  font-size: 1.6rem;
  color: ${Styles.coolGray};
  line-height: 2.5rem;
  font-weight: 400;
`;

export const PricingSummaryDiv = styled.div`
  border-radius: 0.7rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

export const SelectedOptionsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;

  padding: 1.5rem;
  border-radius: 1rem;

  background-color: ${Styles.alabaster};

  gap: 1rem;

  .line {
    display: block;
    width: 100%;
    height: .1px;
    background-color: ${Styles.lightGray};
  }

  @media (min-width: 65em) {
    width: 40vw;
    gap: 2rem;
  }
`
export const PlanSelectedDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`

export const ChangePlanButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  color: ${Styles.coolGray};

  &:hover {
    color: ${Styles.purplishBlue}
  }
`

export const AddonsSelectedDiv = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.4rem;

  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const SelectedPlanTitle = styled.p`
  font-size: 1.4rem;
  letter-spacing: 0.01rem;
  font-weight: 700;
  color: ${Styles.marineBlue};

  @media (min-width: 65em) {
    font-size: 1.6rem;
  }
`

export const SelectedPlanPrice = styled.p`
  font-size: 1.4rem;
  letter-spacing: -0.01rem;
  font-weight: 700;
  color: ${Styles.marineBlue};

  @media (min-width: 65em) {
    font-size: 1.6rem;
  }
`

export const SelectedAddonTitle = styled.p`
  font-size: 1.3rem;
  color: ${Styles.coolGray};

  @media (min-width: 65em) {
    font-size: 1.6rem;
  }
`

export const SelectedAddonPrice = styled.p`
  font-size: 1.3rem;
  color: ${Styles.marineBlue};

  @media (min-width: 65em) {
    font-size: 1.6rem;
  }
`

export const TotalPriceDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem 1.5rem 0 1.5rem;
`

export const TotalPriceTitle = styled.p`
  font-size: 1.3rem;
  color: ${Styles.coolGray};

  @media (min-width: 65em) {
    font-size: 1.6rem;
  }
`

export const TotalPrice = styled.p`
  font-size: 1.5rem;
  color: ${Styles.purplishBlue};
  font-weight: 700;

  @media (min-width: 65em) {
    font-size: 2rem;
  }
`