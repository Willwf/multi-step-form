import * as Styles from "./styles";

export function SelectYourPlan() {
  return (
    <Styles.Main>
      <Styles.FormSection>
        <Styles.Form>
          <Styles.FormTitleDiv>
            <Styles.FormTitle>Select your plan</Styles.FormTitle>
            <Styles.FormSubtitle>
              You have the option of monthly or yearly billing.
            </Styles.FormSubtitle>
          </Styles.FormTitleDiv>
        </Styles.Form>
      </Styles.FormSection>
    </Styles.Main>
  );
}
