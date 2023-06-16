import { FC, useState } from 'react'
import { View } from 'react-native'

import CircleTimer from './CircleTimer/CircleTimer'
import SessionIndicator from './SessionIndicator/SessionIndicator'
import TimerBar from './TimerBar/TimerBar'
import { EnumStatus, ITimerOptions } from './timer.interface'

const Timer: FC = () => {
  const [timer, setTimer] = useState<ITimerOptions>({
    isPlaying: false,
    status: EnumStatus.WORK,
    currentSession: 1,
    currentBreak: 0,
    key: 0
  })

  return (
    <View className='items-center'>
      <View className='my-20 items-center'>
        <CircleTimer timer={timer} setTimer={setTimer} />
        <SessionIndicator
          currentBreak={timer.currentBreak}
          currentSession={timer.currentSession}
        />
        <TimerBar timer={timer} setTimer={setTimer} />
      </View>
    </View>
  )
}

export default Timer
