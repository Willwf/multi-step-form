import styled from "styled-components";
import * as Styles from "../../styles/variables";
import bgNavMobile from "../../assets/images/bg-sidebar-mobile.svg";
import bgNavDesktop from "../../assets/images/bg-sidebar-desktop.svg";

export const Nav = styled.nav`
  background-image: url(${bgNavMobile});
  background-repeat: no-repeat;
  background-size: cover;
  height: 22vh;
  width: 100vw;

  position: relative;

  @media (min-width: 65em) {
    background-image: url(${bgNavDesktop});

    border-radius: 1rem;

    height: 60vh;
    width: 25vw;
  }
`;

export const StepsDiv = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  gap: 1.5rem;

  padding-top: 3rem;
`;

export const StepDiv = styled.div``;

export const NumberDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  height: 3.2rem;
  width: 3.2rem;
  border: 1px solid white;
  border-radius: 100%;

  &.active {
    background-color: ${Styles.lightBlue};
    color: black;
  }
`;

export const Number = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
`;

export const InfoDiv = styled.div`
  display: none;
`;

export const StepInfo = styled.p`
  display: none;
`;

export const StepTitle = styled.h2`
  display: none;
`;
