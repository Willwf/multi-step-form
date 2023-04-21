import * as Styles from "./styles";

export function PersonalInfoForm() {
  return (
    <Styles.Main>
      <Styles.FormSection>
        <Styles.Form>
          <Styles.FormTitleDiv>
            <Styles.FormTitle>Personal Info</Styles.FormTitle>
            <Styles.FormSubtitle>
              Please provide your name, email address, and phone number.
            </Styles.FormSubtitle>
          </Styles.FormTitleDiv>

          <Styles.FormInputDiv>
            <fieldset>
              <Styles.Label>Name</Styles.Label>
              <Styles.Input placeholder="e.g. Stephen King" />
            </fieldset>

            <fieldset>
              <Styles.Label>Email Address</Styles.Label>
              <Styles.Input
                type="email"
                placeholder="e.g.stephenking@lorem.com"
              />
            </fieldset>

            <fieldset>
              <Styles.Label>Phone Number</Styles.Label>
              <Styles.Input placeholder="e.g. +1 234 567 890" />
            </fieldset>
          </Styles.FormInputDiv>
        </Styles.Form>
      </Styles.FormSection>
    </Styles.Main>
  );
}
