import React from "react"
import styled from "styled-components"

import Text from "../helpers/text"
import { Box } from "../styled"

import sizes from "../../global/sizes"

const S = {}
S.Section = styled.section`
  position: relative;
  background-color: var(--background-color);

  ::after {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    bottom: 0px;
    height: 50px;
    width: 4px;
    margin-left: -2px;
    background-color: var(--primary-color);
  }
`
S.Box = styled(Box)`
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, var(--space-between) auto) var(--space-between);
  align-items: center;

  @media (max-width: ${sizes.sm}) {
    grid-template-columns: 1fr;
  }
`
S.Text = styled(Text)`
  align-self: center;
  min-width: 0;
  min-height: 0;
`
S.Tagline1 = styled(S.Text)`
  grid-row: 2/3;

  span {
    color: var(--primary-color);
    margin: -0.25em;
  }
`
S.Tagline2 = styled(S.Text)`
  grid-row: 4/5;
  color: var(--primary-color);
`

const Taglines = () => {
  return (
    <S.Section>
      <S.Box>
        <S.Tagline1 title="tagline-1"></S.Tagline1>
        <S.Tagline2 title="tagline-2"></S.Tagline2>
      </S.Box>
    </S.Section>
  )
}

export default Taglines
