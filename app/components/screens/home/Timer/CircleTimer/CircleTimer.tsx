import { FC, useRef } from 'react'
import { Text } from 'react-native'
import ConfettiCannon from 'react-native-confetti-cannon'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

import { breakDuration, flowDuration, sessionCount } from '../timer.constants'
import { EnumStatus, ITimerProps } from '../timer.interface'

const CircleTimer: FC<ITimerProps> = ({ timer: { currentSession, isPlaying, key, status }, setTimer }) => {
  
  const isAllSessionsCompleted = currentSession === sessionCount
  const confettiRef = useRef<ConfettiCannon>(null)

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={isPlaying}
      duration={status === EnumStatus.REST ? breakDuration : flowDuration}
      colors={['#3B3675', '#664EFF']}
      colorsTime={[flowDuration, 0]}
      trailColor='#252339'
      onComplete={() => {
        setTimer(prev => ({ ...prev, isPlaying: false }))

        if (isAllSessionsCompleted) {
          setTimer(prev => ({ ...prev, status: EnumStatus.COMPLETED }))
          confettiRef.current?.start()
        }

        setTimer(prev => ({ ...prev, key: prev.key + 1 }))

        if (status === EnumStatus.REST) {
          setTimer(prev => ({
            ...prev,
            status: EnumStatus.WORK,
            currentSession: prev.currentSession + 1
          }))
        }

        if (currentSession % 2 === 0) {
          setTimer(prev => ({
            ...prev,
            status: EnumStatus.REST,
            currentBreak: prev.currentBreak + 1
          }))
        } else {
          setTimer(prev => ({
            ...prev,
            currentSession: prev.currentSession + 1
          }))
        }
      }}
      size={300}
      strokeWidth={15}
    >
      {({ remainingTime }) => {
        // const hours =
        //   Math.floor(remainingTime / 3600).toString().length > 1
        //     ? Math.floor(remainingTime / 3600)
        //     : `0${Math.floor(remainingTime / 3600)}`
        let minutes =
          Math.floor((remainingTime % 3600) / 60).toString().length > 1
            ? Math.floor((remainingTime % 3600) / 60)
            : `0${Math.floor((remainingTime % 3600) / 60)}`
        let seconds: string | number = remainingTime % 60

        if (status === EnumStatus.REST) {
          minutes =
            Math.floor(flowDuration / 60) < 10
              ? Math.floor(flowDuration / 60) + '0'
              : Math.floor(flowDuration / 60)
          seconds = flowDuration % 60
        }

        seconds = seconds < 10 ? `0${seconds}` : seconds

        return (
          <>
            <ConfettiCannon
              ref={confettiRef}
              autoStart={false}
              count={200}
              origin={{ x: -80, y: 0 }}
            />
            <Text className='font-semibold text-white text-5xl mt-6'>{`${minutes}:${seconds}`}</Text>
            <Text className='font-medium text-white text-2xl mt-1'>
              {status}
            </Text>
          </>
        )
      }}
    </CountdownCircleTimer>
  )
}

export default CircleTimer
