import styled from "styled-components"
import sizes from "../global/sizes"

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto 1fr;
  grid-column-gap: var(--column-gap);
  grid-auto-flow: column;

  margin: auto;
  padding: 0 var(--column-gap);
  width: 100%;
  max-width: var(--max-width);
  height: 100%;

  z-index: 10;

  @media (max-width: ${sizes.sm}) {
    padding: 0 var(--column-gap-sm);
    grid-template-columns: repeat(3, 1fr);
  }
`
