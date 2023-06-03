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

    height: initial;
    width: initial;
  }
`;

export const StepsDiv = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  gap: 1.5rem;

  padding-top: 3rem;

  @media (min-width: 65em) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 3rem;

    padding: 3rem 6rem 0 2rem;
  }
`;

export const StepDiv = styled.div`
  @media (min-width: 65em) {
    display: flex;
    gap: 1.5rem;
  }
`;

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

  @media (min-width: 65em) {
    display: block;
  }
`;

export const StepInfo = styled.p`
  display: none;

  @media (min-width: 65em) {
    display: block;

    font-size: 1.2rem;
    text-transform: uppercase;
    color: ${Styles.lightGray};
  }
`;

export const StepTitle = styled.h2`
  display: none;

  @media (min-width: 65em) {
    display: block;

    letter-spacing: 0.1rem;
    font-size: 1.4rem;
    text-transform: uppercase;
    color: ${Styles.magnolia};
  }
`;
