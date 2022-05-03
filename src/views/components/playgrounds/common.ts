import styled from 'styled-components'
import { FlexCenterCSS } from '../../styles'

export const Background = styled.main`
  box-sizing: border-box;
  ${FlexCenterCSS}
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100vh;
  background: linear-gradient(var(--background-orange), var(--background-pink));
`

export const Window = styled.section`
  box-sizing: border-box;
  width: 500px;
  height: 100px;
  border: var(--border-size-md) solid var(--color-dark-primary);
  border-radius: 10px;
  overflow: hidden;
`
