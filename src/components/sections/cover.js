import React from "react"
import styled from "styled-components"

import CoverImage from "./cover-image"
import Text from "../helpers/text"

import logo from "../../assets/svg/logo.svg"

import sizes from "../../global/sizes"
import { Box } from "../styled"

const S = {}
S.Section = styled.section`
  position: fixed;
  height: var(--section-height);
  width: 100%;
  z-index: -1;

  ::after {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    bottom: 0px;
    height: 50px;
    width: 4px;
    margin-left: -2px;
    background-color: var(--background-color);
  }
`
S.Box = styled(Box)`
  grid-template-rows: auto 1fr;
`
S.Logo = styled.img`
  grid-column: 1 / 3;
  align-self: start;
  width: 100%;
  height: auto;
`
S.Text = styled(Text)`
  grid-column: 1 / 6;
  align-self: center;

  h1 {
    color: var(--light-color);
  }

  @media (max-width: ${sizes.sm}) {
    grid-column: 1 / 4;
  }
`

const Cover = () => {
  return (
    <S.Section>
      <CoverImage />
      <S.Box>
        <S.Logo src={logo} alt="MM+ logo" />
        <S.Text title="cover"></S.Text>
      </S.Box>
    </S.Section>
  )
}

export default Cover
