import React from "react"
import styled from "styled-components"

import Text from "../helpers/text"
import { Box } from "../styled"
import sizes from "../../global/sizes"

import iconSearch from "../../assets/svg/search.svg"
import iconChat from "../../assets/svg/chat.svg"
import iconCode from "../../assets/svg/code.svg"
import iconAI from "../../assets/svg/ai.svg"

const S = {}
S.Section = styled.section`
  position: relative;
  color: var(--light-color);
  background-color: var(--primary-color);

  ::after {
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    left: 50%;
    bottom: 0px;
    top: 0px;
    height: 100%;
    margin-left: -2px;
    border-left: 4px dashed var(--light-color);
    opacity: 0.2;
  }
`
S.Box = styled(Box)`
  grid-template-rows: repeat(4, var(--space-between) auto) var(--space-between);

  @media (max-width: ${sizes.lg}) {
    --space-between: 60vh;
    grid-template-columns: 1fr;
  }
`
S.Text = styled(Text)`
  min-width: 0;
  min-height: 0;

  grid-row: ${props => props.row};
  grid-column: ${props => (props.right ? "4/6" : "1/3")};
  text-align: ${props => (props.right ? "left" : "right")};

  @media (max-width: ${sizes.lg}) {
    text-align: center;
    grid-column: 1/2;
  }
`
S.Icon = styled.div`
  grid-column: 3/4;
  position: relative;
  justify-self: center;
  width: 180px;
  grid-row: ${props => props.row};

  & > img {
    position: absolute;
    z-index: 10;
    transform: translate(0, -5px);
  }

  @media (max-width: ${sizes.lg}) {
    justify-self: center;
    grid-column: 1/2;

    & > img {
      transform: translate(${props => (props.up ? "-10px" : "0")}, -200px);
    }
  }
`

const Services = () => {
  return (
    <S.Section>
      <S.Box>
        <S.Text row="2/3" title="service-1"></S.Text>
        <S.Icon row="2/3" up>
          <img src={iconSearch} alt="Search icon" />
        </S.Icon>
        <S.Text row="4/5" right title="service-2"></S.Text>
        <S.Icon row="4/5" right>
          <img src={iconChat} alt="Chat icon" />
        </S.Icon>
        <S.Text row="6/7" title="service-3"></S.Text>
        <S.Icon row="6/7">
          <img src={iconCode} alt="Code icon" />
        </S.Icon>
        <S.Text row="8/9" right title="service-4"></S.Text>
        <S.Icon row="8/9" right>
          <img src={iconAI} alt="A.I. icon" />
        </S.Icon>
      </S.Box>
    </S.Section>
  )
}

export default Services
