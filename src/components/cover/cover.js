import React from "react"
import styled from "styled-components"

import Image from "./image"
import Text from "../text"
import Logo from "../../static/svg/logo.svg"

import sizes from "../../global/sizes"

const S = {}
S.Section = styled.section`
  position: fixed;
  height: var(--section-height);
  width: 100%;
  z-index: -1;

  * {
    outline: 1px solid yellow;
  }
`
S.Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: var(--max-width);
  height: 100%;
  z-index: 10;
`
S.BoxLogo = styled.div`
  display: flex;
  flex: 0 0 auto;

  > div {
    margin: 0 var(--column-margin);
  }
`
S.Logo = styled(Logo)`
  flex: 2;
  width: 100%;
  height: 100%;
`
S.LogoContainer = styled.div`
  display: flex;
  flex: 2;

  @media (max-width: ${sizes.sm}) {
    flex: 2;
  }
`
S.LogoSpacer = styled.div`
  flex: 3;

  @media (max-width: ${sizes.sm}) {
    flex: 1;
  }
`
S.Text = styled.div`
  flex: 1 0 auto;
  display: flex;
  margin: 0 var(--column-margin);
  color: var(--primary-color);
  font-size: var(--h1-size);
  line-height: var(--h1-height);
  font-weight: 900;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    color: var(--white-color);
  }

  @media (max-width: ${sizes.sm}) {
    /* TODO: replace value */
    font-size: 4rem;
    line-height: 4rem;
  }
`

const Cover = () => {
  return (
    <S.Section>
      <Image />
      <S.Box>
        <S.BoxLogo>
          <S.LogoContainer>
            <S.Logo />
          </S.LogoContainer>
          <S.LogoSpacer />
        </S.BoxLogo>
        <S.Text>
          <Text title="cover"></Text>
        </S.Text>
      </S.Box>
    </S.Section>
  )
}

export default Cover
