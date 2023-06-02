import * as Styles from "./styles";

import thankYouIcon from "../../assets/images/icon-thank-you.svg";

export function SubscriptionConfirmedPage() {
  return (
    <Styles.SubmittedDiv>
      <Styles.SubmittedIcon src={thankYouIcon} alt="Thank you icon" />
      <Styles.Title>Thank you!</Styles.Title>
      <Styles.Description>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. if you ever need support, please feel free to e-mail us at
        support@loremgaming.com.
      </Styles.Description>
    </Styles.SubmittedDiv>
  );
}
