import React from "react"
import styled from "styled-components"

import Text from "../helpers/text"
import { Box } from "../styled"
import sizes from "../../global/sizes"

import iconSearch from "../../static/icons/search.svg"
import iconChat from "../../static/icons/chat.svg"
import iconCode from "../../static/icons/code.svg"

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
  grid-template-rows: repeat(3, var(--space-between) auto) var(--space-between);

  @media (max-width: ${sizes.lg}) {
    --space-between: 60vh;
    grid-template-columns: 1fr;
  }
`
S.Text = styled(Text)`
  min-width: 0;
  min-height: 0;

  &.left {
    grid-column: 1/3;
    text-align: right;
  }

  &.right {
    grid-column: 4/6;
    text-align: left;
  }

  @media (max-width: ${sizes.lg}) {
    &.left,
    &.right {
      text-align: center;
      grid-column: 1/2;
    }
  }
`
S.Icon = styled.div`
  grid-column: 3/4;
  position: relative;
  justify-self: center;
  width: 180px;

  & > img {
    position: absolute;
    z-index: 10;
    transform: translate(0, -5px);
  }

  @media (max-width: ${sizes.lg}) {
    justify-self: center;
    grid-column: 1/2;

    & > img {
      transform: translate(0, -200px);
    }
  }
`
S.Text1 = styled(S.Text)`
  grid-row: 2/3;
`
S.Icon1 = styled(S.Icon)`
  grid-row: 2/3;

  @media (max-width: ${sizes.lg}) {
    & > img {
      transform: translate(-10px, -200px);
    }
  }
`
S.Text2 = styled(S.Text)`
  grid-row: 4/5;
`
S.Icon2 = styled(S.Icon)`
  grid-row: 4/5;
`
S.Text3 = styled(S.Text)`
  grid-row: 6/7;
`
S.Icon3 = styled(S.Icon)`
  grid-row: 6/7;
`

const Services = () => {
  return (
    <S.Section>
      <S.Box>
        <S.Text1 className="left" title="service-1"></S.Text1>
        <S.Icon1 className="left">
          <img src={iconSearch} alt="Search icon" />
        </S.Icon1>
        <S.Text2 className="right" title="service-2"></S.Text2>
        <S.Icon2 className="right">
          <img src={iconChat} alt="Chat icon" />
        </S.Icon2>
        <S.Text3 className="left" title="service-3"></S.Text3>
        <S.Icon3 className="left">
          <img src={iconCode} alt="Code icon" />
        </S.Icon3>
      </S.Box>
    </S.Section>
  )
}

export default Services
