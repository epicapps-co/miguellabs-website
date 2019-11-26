import React from "react"
import styled from "styled-components"

import Text from "../text"

import sizes from "../../global/sizes"

const S = {}
S.Section = styled.section`
  background-color: cyan;
  height: var(--section-height);
  color: var(--primary-color);
  font-size: var(--h1-size);
  line-height: var(--h1-height);
  font-weight: 900;

  @media (max-width: ${sizes.sm}) {
    font-size: 3rem;
  }
`

const Taglines = () => {
  return (
    <S.Section>
      <Text title="tagline-1"></Text>
      <Text title="tagline-2"></Text>
    </S.Section>
  )
}

export default Taglines
