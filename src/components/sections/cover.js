import React from "react"
import styled from "styled-components"

import CoverImage from "./cover-image"
import Text from "../helpers/text"
import Logo from "../../static/svg/logo.svg"

import sizes from "../../global/sizes"
import { Box } from "../styled"

const S = {}
S.Section = styled.section`
  position: fixed;
  height: var(--section-height);
  width: 100%;
  z-index: -1;
`
S.Logo = styled(Logo)`
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
      <Box>
        <S.Logo />
        <S.Text title="cover"></S.Text>
      </Box>
    </S.Section>
  )
}

export default Cover
