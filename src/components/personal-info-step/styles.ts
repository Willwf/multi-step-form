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

export const FormSectionDiv = styled.div``;

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
export const FormInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 2rem;

  fieldset {
    border: none;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;
export const Label = styled.label`
  font-size: 1.2rem;
  color: ${Styles.marineBlue};
`;

export const errorLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${Styles.strawberryRed};
  display: none;

  &.errorField {
    display: block;
  }
`

export const Input = styled.input`
  height: 5vh;
  padding: 0 1.5rem;
  border: 1px solid rgba(150 153 171 / 50%);
  border-radius: 0.3rem;
  font-size: 1.4rem;
  font-weight: 500;

  &::placeholder {
    font-weight: 500;
    color: ${Styles.coolGray};
  }

  &:hover {
    border-color: ${Styles.marineBlue}
  }

  &:focus {
    border-color: ${Styles.marineBlue}
  }

  &.errorField {
    border-color: ${Styles.strawberryRed}
  }
`;
