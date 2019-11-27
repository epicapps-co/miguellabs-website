import React from "react"
import styled from "styled-components"

import Text from "../helpers/text"
import { Box } from "../styled"

import sizes from "../../global/sizes"

const S = {}
S.Section = styled.section`
  background-color: var(--background-color);
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
S.TextTop = styled(S.Text)`
  grid-row: 2/3;
  span {
    color: var(--primary-color);
    margin: -0.25em;
  }
`
S.TextBottom = styled(S.Text)`
  grid-row: 4/5;
  color: var(--primary-color);
`

const Taglines = () => {
  return (
    <S.Section>
      <S.Box>
        <S.TextTop title="tagline-1"></S.TextTop>
        <S.TextBottom title="tagline-2"></S.TextBottom>
      </S.Box>
    </S.Section>
  )
}

export default Taglines
