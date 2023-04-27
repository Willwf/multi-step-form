import { Nav } from "../../components/nav";
import { PersonalInfoForm } from "../../components/personal-info-form";
import { SelectYourPlan } from "../../components/select-your-plan-form";
import * as Styles from "./styles";

export function Home() {
  return (
    <Styles.FormDiv>
      <Nav />
      <SelectYourPlan />
      <Styles.NextButtonDiv>
        <Styles.NextButton>Next Step</Styles.NextButton>
      </Styles.NextButtonDiv>
    </Styles.FormDiv>
  );
}
