import React from "react"
import styled from "styled-components"

const S = {}
S.Spacer = styled.section`
  height: var(--section-height);
`

const Spacer = () => {
  return <S.Spacer></S.Spacer>
}

export default Spacer
