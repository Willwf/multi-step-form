import { Nav } from "../../components/nav";
import { PersonalInfoForm } from "../../components/personal-info-form";
import * as Styles from "./styles";

export function Home() {
  return (
    <Styles.FormDiv>
      <Nav />
      <PersonalInfoForm />
      <Styles.NextButtonDiv>
        <Styles.NextButton>Next Step</Styles.NextButton>
      </Styles.NextButtonDiv>
    </Styles.FormDiv>
  );
}
