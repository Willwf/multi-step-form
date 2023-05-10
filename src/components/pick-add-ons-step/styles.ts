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

export const AddOnOptionDiv = styled.div`
  border: 1px solid ${Styles.lightGray};
  border-radius: 0.7rem;

  padding: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  cursor: pointer;

  &:hover {
    border-color: ${Styles.purplishBlue};
  }

  &.selected {
    border-color: ${Styles.marineBlue};
    background-color: ${Styles.alabaster};
  }
`;

export const CheckboxInputDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  margin-right: 1.5rem;

  border: solid 1px ${Styles.lightGray};
  border-radius: 0.5rem;

  &.selected {
    background: ${Styles.purplishBlue};
  }

  & img {
    width: 65%;
  }
`;

export const AddOnOptionTextsDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const AddOnOptionInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const AddOnOptionTitle = styled.p`
  font-size: 1.4rem;
  letter-spacing: 0.01rem;
  font-weight: 700;
  color: ${Styles.marineBlue};
`;

export const AddOnOptionSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${Styles.coolGray};
`;

export const AddOnOptionPrice = styled.p`
  color: ${Styles.purplishBlue};
  font-size: 1.1rem;
`;
