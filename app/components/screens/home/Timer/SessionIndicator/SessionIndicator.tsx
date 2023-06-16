import { AntDesign } from '@expo/vector-icons'
import cn from 'clsx'
import { FC } from 'react'
import { View } from 'react-native'

import { isSmallIndicator, sessionCount, shadow } from '../timer.constants'
import { ITimerOptions } from '../timer.interface'

import { AppConstants } from '@/app.constants'

interface ISessionIndicators
  extends Pick<ITimerOptions, 'currentBreak' | 'currentSession'> {}

const SessionIndicator: FC<ISessionIndicators> = ({currentBreak, currentSession}) => {
  return (
    <View className='mt-14 flex-row'>
      {[...Array(sessionCount)].map((_, idx) => (
        <View className='flex-row items-center relative' key={idx}>
          <View
            className={cn('w-4 h-4 bg-[#2C2B3B] rounded-full', {
              'bg-primary opacity-70': idx + 1 <= currentSession,
              'bg-[#1D1C2E] w-6 h-6 border-primary border-4':
                idx + 1 === currentSession,
              'w-3 h-3': isSmallIndicator
            })}
            style={
              currentSession === idx + 1
                ? shadow
                : {}
            }
          ></View>

          {(idx + 1) % 2 === 0 && idx + 1 !== sessionCount && (
            <View className='absolute left-5 -top-5 opacity-70'>
              <AntDesign
                name='rest'
                color={idx / 2 <= currentBreak ? '#523FC0' : '#2C2B3B'}
                size={20}
              />
            </View>
          )}

          {idx + 1 !== sessionCount && (
            <View
              className={cn('w-6 h-0.5 bg-[#2C2B3B] opacity-70', {
                'bg-primary opacity-70': idx + 2 <= currentSession,
                'w-4': isSmallIndicator
              })}
            ></View>
          )}
        </View>
      ))}
    </View>
  )
}

export default SessionIndicator
