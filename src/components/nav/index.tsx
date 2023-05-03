import * as Styles from "./styles";

interface NavProps {
  currentStep: number;
}

export function Nav(props: NavProps) {
  const { currentStep } = props;

  return (
    <Styles.Nav>
      <Styles.StepsDiv>
        <Styles.StepDiv>
          <Styles.NumberDiv className={currentStep === 1 ? "active" : ""}>
            <Styles.Number>1</Styles.Number>
          </Styles.NumberDiv>
          <Styles.InfoDiv>
            <Styles.StepInfo>Step 1</Styles.StepInfo>
            <Styles.StepTitle>Your Info</Styles.StepTitle>
          </Styles.InfoDiv>
        </Styles.StepDiv>

        <Styles.StepDiv>
          <Styles.NumberDiv className={currentStep === 2 ? "active" : ""}>
            <Styles.Number>2</Styles.Number>
          </Styles.NumberDiv>
          <Styles.InfoDiv>
            <Styles.StepInfo>Step 2</Styles.StepInfo>
            <Styles.StepTitle>Select Plan</Styles.StepTitle>
          </Styles.InfoDiv>
        </Styles.StepDiv>

        <Styles.StepDiv>
          <Styles.NumberDiv className={currentStep === 3 ? "active" : ""}>
            <Styles.Number>3</Styles.Number>
          </Styles.NumberDiv>
          <Styles.InfoDiv>
            <Styles.StepInfo>Step 3</Styles.StepInfo>
            <Styles.StepTitle>Add-ons</Styles.StepTitle>
          </Styles.InfoDiv>
        </Styles.StepDiv>

        <Styles.StepDiv>
          <Styles.NumberDiv className={currentStep === 4 ? "active" : ""}>
            <Styles.Number>4</Styles.Number>
          </Styles.NumberDiv>
          <Styles.InfoDiv>
            <Styles.StepInfo>Step 4</Styles.StepInfo>
            <Styles.StepTitle>Summary</Styles.StepTitle>
          </Styles.InfoDiv>
        </Styles.StepDiv>
      </Styles.StepsDiv>
    </Styles.Nav>
  );
}
