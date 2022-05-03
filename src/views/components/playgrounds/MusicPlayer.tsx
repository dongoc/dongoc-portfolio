import { useState, useEffect, useRef, MutableRefObject, MouseEvent } from 'react'
import styled, { css } from 'styled-components'
import { Window } from './common'
import { FlexCenterCSS, FlexAlignCenterCSS } from '../../styles'

type PlayStatus = 'play' | 'pause'

const MusicWindow = styled(Window)`
  display: grid;
  grid-template-rows: 2fr 1fr;
  padding: 0 20px;
  background: linear-gradient(to right, var(--color-pink-primary), var(--color-purple-primary));
`

const ControlRow = styled.div`
  ${FlexAlignCenterCSS}
  justify-content: space-between;
  width: 35%;
  margin: 0 auto;
`

const NextButton = styled.div`
  position: relative;
  ${FlexCenterCSS}
  border-right: none;
  border-top: none;
  border-left: none;
  cursor: pointer;

  &::after {
    content: '';
    width: 15px;
    height: 15px;
    border-style: solid;
    border-width: 7.5px 0px 7.5px 15px;
    border-color: transparent transparent transparent var(--color-dark-primary);
    box-sizing: border-box;
    transform: translateX(1px);
  }

  &::before {
    content: '';
    width: 4px;
    height: 13px;
    background: var(--color-dark-primary);
    margin: -16px;
  }
`

const PrevButton = styled(NextButton)`
  transform: rotate(180deg);
`

const PlayButton = styled.div<{ status: PlayStatus }>`
  ${FlexCenterCSS}
  width: 30px;
  height: 30px;
  background: var(--color-light-primary);
  border: var(--border-size-sm) solid var(--color-dark-primary);
  border-radius: 25px;
  cursor: pointer;

  ${p => p.status === 'play' && css`
    &::after {
      content: '';
      width: 15px;
      height: 15px;
      border-style: solid;
      border-width: 7.5px 0px 7.5px 15px;
      border-color: transparent transparent transparent var(--color-dark-primary);
      box-sizing: border-box;
      transform: translateX(2px);
    }
  `}

  ${p => p.status === 'pause' && css`
    &::after {
      content: '';
      width: 13px;
      height: 13px;
      border-style: double;
      border-width: 0px 0px 0px 13px;
      border-color: var(--color-dark-primary);
      transform: translateX(6px);
    }
  `}
`

const MusicProgressBar = styled.div<{ playingTime: string; remainingTime: string }>`
  position: relative;
  height: 15px;
  border: var(--border-size-sm) solid var(--color-dark-primary);
  border-radius: 7px;
  background: var(--color-light-primary);

  &::after {
    content: '${p => p.playingTime}';
    position: absolute;
    top: -20px;
    left: 0;
  }

  &::before {
    content: '${p => p.remainingTime}';
    position: absolute;
    top: -20px;
    right: 0;
  }
`

const MusicProgressColor = styled.div<{ playPercentage: number }>`
  width: ${p => p.playPercentage}%;
  height: 100%;
  border-radius: 3.5px;
  background: linear-gradient(to right, var(--color-pink-secondary), var(--color-purple-secondary));
  cursor: pointer;
`

const MusicSlideButton = styled.div<{ playPercentage: number }>`
  position: absolute;
  top: 0;
  left: ${p => p.playPercentage}%;
  transform: translate(-50%, -35%);
  width: 25px;
  height: 25px;
  border: var(--border-size-sm) solid var(--color-dark-primary);
  border-radius: 15px;
  background: linear-gradient(to right, var(--color-pink-secondary), var(--color-purple-secondary));
  cursor: pointer;
  z-index: 2;
`

const MusicPlayer = () => {
  const totalTime = 195 // 3분 15초
  const [playingTime, setPlayingTime] = useState<number>(0)
  const [playStatus, setPlayStatus] = useState<PlayStatus>('play')
  const playPercentage = Math.floor((playingTime / totalTime) * 100)
  const progressBarRef = useRef() as MutableRefObject<HTMLDivElement>

  const calcTimerString = (ms: number) => {
    const mm = Math.floor(ms / 60)
    const ss = ms % 60
    const formattedSs = ss < 10 ? `0${ss}` : ss
    return `${mm}:${formattedSs}`
  }

  const handlePlayStatusChange = () => {
    const next = playStatus === 'play' ? 'pause' : 'play'
    setPlayStatus(next)
  }

  const handleControlClick = (type: 'prev' | 'next') => {
    const addition = type === 'prev' ? -10 : 10
    setPlayingTime(playingTime + addition)
  }

  const handleProgressBarClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current) return
    const { clientX } = e
    const { width, left } = progressBarRef.current.getBoundingClientRect()
    const skippedTime = Math.floor(((clientX - left) * totalTime) / width)
    setPlayingTime(skippedTime)
  }

  useEffect(() => {
    let timerId: NodeJS.Timer | undefined = undefined

    if (playStatus === 'play' && totalTime > playingTime) {
      timerId = setInterval(() => {
        setPlayingTime(prev => prev + 1)
      }, 1000)
    } else if (playStatus === 'play' && totalTime === playingTime) {
        setPlayingTime(0);
    } else {
      clearInterval(timerId)
    }

    return () => clearInterval(timerId as NodeJS.Timer)
  }, [playingTime, playStatus])

  return (
    <MusicWindow>
      <ControlRow>
        <PrevButton onClick={() => handleControlClick('prev')} />
        <PlayButton status={playStatus} onMouseDown={handlePlayStatusChange} />
        <NextButton onClick={() => handleControlClick('next')} />
      </ControlRow>
      <MusicProgressBar
        ref={progressBarRef}
        onClick={handleProgressBarClick}
        playingTime={calcTimerString(playingTime)}
        remainingTime={calcTimerString(totalTime - playingTime)}
      >
        <MusicProgressColor playPercentage={playPercentage} />  
        <MusicSlideButton playPercentage={playPercentage} />
      </MusicProgressBar>
    </MusicWindow>
  )
}

export default MusicPlayer