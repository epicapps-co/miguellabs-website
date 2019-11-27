import React from "react"
import styled from "styled-components"

import Image from "./image"
import Text from "../helpers/text"
import Logo from "../../static/svg/logo.svg"

import sizes from "../../global/sizes"
import { Box } from "../styled"

const S = {}
S.Section = styled.section`
  position: fixed;
  height: var(--section-height);
  width: 100%;
  z-index: 0;
`
S.Logo = styled(Logo)`
  grid-column: 1 / 3;
  grid-row-start: 1 / 2;
  align-self: start;
  width: 100%;
  height: auto;
`
S.Text = styled(Text)`
  grid-column: 1 / 6;
  grid-row: 2 / 3;
  align-self: center;

  h1 {
    color: var(--white-color);
  }

  @media (max-width: ${sizes.sm}) {
    grid-column: 1 / 4;

    h1 {
      font-size: var(--h1-size-sm);
    }
  }
`

const Cover = () => {
  return (
    <S.Section>
      <Image />
      <Box>
        <S.Logo />
        <S.Text title="cover"></S.Text>
      </Box>
    </S.Section>
  )
}

export default Cover
