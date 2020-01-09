import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import sizes from "../global/sizes"

const S = {}
S.Footer = styled.footer`
  background-color: var(--darker-color);
  color: var(--light-color);
`
S.Container = styled.div`
  margin: auto;
  padding: 2rem 2rem 3rem;
  max-width: var(--body-max-width);

  @media (max-width: ${sizes.sm}) {
    padding: 1rem 1rem 2rem;
  }
`
S.Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  font-size: var(--h5-size);
`
S.LinkGroup = styled.div`
  display: flex;
  flex: 1 auto;
  margin-bottom: 0.5rem;

  a {
    margin-right: 1rem;
  }
`
S.LinkTitle = styled.div`
  font-weight: 500;
`
S.Copyright = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: var(--h6-size);
  opacity: 0.6;
`
S.Bold = styled.span`
  font-weight: 500;
`

export default function Footer() {
  return (
    <S.Footer>
      <S.Container>
        <S.Links>
          <S.LinkGroup>
            <a href="/privacy">Privacy Policy</a>
            <a href="/cookies">Cookies</a>
            <Link to="/terms">Terms</Link>
          </S.LinkGroup>
        </S.Links>
        <S.Copyright>
          <div>Copyright © {new Date().getFullYear()} MM+&nbsp;</div>
        </S.Copyright>
      </S.Container>
    </S.Footer>
  )
}
