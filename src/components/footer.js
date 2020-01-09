import React from "react"
import styled from "styled-components"

import { Box } from "./styled"

import sizes from "../global/sizes"

const S = {}
S.Footer = styled.footer`
  position: relative;
  background-color: var(--darker-color);
  color: var(--light-color);

  a {
    color: var(--light-color);
  }

  ::after {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    top: -50px;
    height: 50px;
    width: 4px;
    margin-left: -2px;
    background-color: var(--darker-color);
  }
`
S.Box = styled(Box)`
  grid-template-rows: 10vh auto 10vh auto 20vh;

  @media (max-width: ${sizes.sm}) {
    grid-template-columns: 1fr;
    grid-template-rows: 10vh auto 10vh auto 10vh auto 20vh;
  }
`
S.Info = styled.div`
  grid-column: 1/4;
  grid-row: 2/3;

  @media (max-width: ${sizes.sm}) {
    grid-column: 1/2;
  }
`
S.Link = styled.div`
  font-size: var(--h4-size);
  margin-bottom: 0.5rem;
`
S.Social = styled.div`
  grid-column: 4/6;
  grid-row: 2/3;

  @media (max-width: ${sizes.sm}) {
    grid-column: 1/2;
    grid-row: 4/5;
  }
`
S.Bottom = styled.div`
  grid-column: 1/6;
  grid-row: 4/5;

  p {
    margin-top: 0.5rem;
  }

  span {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }

  @media (max-width: ${sizes.sm}) {
    grid-column: 1/2;
    grid-row: 6/7;

    a {
      display: block;
      margin: 1rem 0;
    }

    span {
      display: none;
    }
  }
`
S.Links = styled.div``
S.Copyright = styled.div``

export default function Footer() {
  return (
    <S.Footer>
      <S.Box>
        <S.Info>
          <S.Link>
            <a href="mailto:hello@mmplus.studio">hello@mmplus.studio</a>
          </S.Link>
          <p>&nbsp;</p>
          <p>45 Warren St</p>
          <p>New York, NY 10007</p>
          <p>&nbsp;</p>
          <p>
            <strong>+1 (917) 930 3135</strong>
          </p>
        </S.Info>
        <S.Social>
          <S.Link>
            <a href="/">Linkedin</a>
          </S.Link>
          <S.Link>
            <a href="/">Facebook</a>
          </S.Link>
          <S.Link>
            <a href="/">Twitter</a>
          </S.Link>
          <S.Link>
            <a href="/">Instagram</a>
          </S.Link>
        </S.Social>
        <S.Bottom>
          <p>© {new Date().getFullYear()} MMPlus Ltd. All rights reserved.</p>
          {/* <p>
            <a href="/legal">Company legal information</a>
            <span> | </span>
            <a href="/privacy">Privacy Policy</a>
            <span> | </span>
            <a href="/cookies">Cookie Policy</a>
          </p> */}
        </S.Bottom>
      </S.Box>
    </S.Footer>
  )
}
