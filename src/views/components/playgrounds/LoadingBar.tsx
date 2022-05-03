import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FlexAlignCenterCSS } from '../../styles'
import { Window } from './common'

const LoadingWindow = styled(Window)`
  display: grid;
  grid-template-rows: 2fr 3fr;
`

const StatusBar = styled.div`
  ${FlexAlignCenterCSS}
  padding: 0 10px;
  border-bottom: var(--border-size-sm) solid var(--color-dark-primary);
  background: var(--color-pink-primary);
  font-size: 1.2rem;
`

const Content = styled.div`
  ${FlexAlignCenterCSS}
  padding: 0 20px;
  background-color: var(--color-light-primary);
`

const ProgressBar = styled.div<{ percentage: number }>`
  position: relative;
  ${FlexAlignCenterCSS}
  overflow: hidden;
  width: 100%;
  height: 25px;
  border: var(--border-size-sm) solid var(--color-dark-primary);
  border-radius: 20px;

  & > div {
    box-sizing: content-box;
    width: ${p => p.percentage}%;
    height: 20px;
    border: ${p => p.percentage < 100 && p.percentage > 0 ? 'var(--border-size-sm) solid var(--color-dark-primary)' : 'none'};
    border-left: none;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background: linear-gradient(to right, var(--color-pink-primary), var(--color-purple-primary));
    transition: border-left 500ms ease-in 500ms;
  }

  ::before {
    content: '${p => p.percentage}%';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: var(--color-dark-primary);
    z-index: 2;
  }
`

const LoadingBar = () => {
  const [percentage, setPercentage] = useState<number>(0)

  useEffect(() => {
    let timerId: NodeJS.Timer | undefined = undefined

    if (percentage < 100) {
      timerId = setInterval(() => setPercentage(prev => prev + 1), 100)
    } else {
      clearInterval(timerId)
    }

    return () => clearInterval(timerId as NodeJS.Timer)
  }, [percentage])

  return (
    <LoadingWindow>
      <StatusBar>Loading Data</StatusBar>
      <Content>
        <ProgressBar percentage={percentage} >
          <div />
        </ProgressBar>
      </Content>
    </LoadingWindow>
  )
}

export default LoadingBar