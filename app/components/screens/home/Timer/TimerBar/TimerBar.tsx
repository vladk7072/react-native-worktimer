import { Foundation, Entypo } from '@expo/vector-icons'
import cn from 'clsx'
import { FC } from 'react'
import { Pressable, View } from 'react-native'

import { sessionCount, shadow } from '../timer.constants'
import { ITimerProps } from '../timer.interface'

const TimerBar: FC<ITimerProps> = ({
  timer: { currentSession, isPlaying },
  setTimer
}) => {
  return (
    <View className='items-center mt-16'>
      <View className='flex-row justify-center items-center gap-5'>
        <Pressable
          className={cn('opacity-50 w-12 items-center', {
            'opacity-10': currentSession == 1
          })}
          onPress={() => {
            if (currentSession !== 1) {
              setTimer(prev => ({
                ...prev,
                currentSession: prev.currentSession - 1,
                key: prev.key - 1,
                isPlaying: false,
                currentBreak: currentSession % 2 && prev.currentBreak - 1
              }))
            }
          }}
        >
          <Entypo name='chevron-left' size={34} color='white' />
        </Pressable>
        <Pressable
          onPress={() => {
            setTimer(prev => ({ ...prev, isPlaying: !prev.isPlaying }))
          }}
          className={cn(
            'bg-primary w-[65px] h-[65px] rounded-full items-center justify-center',
            {
              'pl-1.5': !isPlaying
            }
          )}
          style={shadow}
        >
          <Foundation
            name={isPlaying ? 'pause' : 'play'}
            color='white'
            size={40}
          />
        </Pressable>
        <Pressable
          className={cn('opacity-50 w-12 items-center', {
            'opacity-10': currentSession === sessionCount
          })}
          onPress={() => {
            currentSession !== sessionCount &&
              setTimer(prev => ({
                ...prev,
                currentSession: prev.currentSession + 1,
                key: prev.key + 1,
                isPlaying: false,
                currentBreak:
                  currentSession % 2 === 0
                    ? prev.currentBreak + 1
                    : prev.currentBreak
              }))
          }}
        >
          <Entypo name='chevron-right' size={34} color='white' />
        </Pressable>
      </View>
      <Pressable
        className='opacity-50 mt-8'
        onPress={() => {
          setTimer(prev => ({
            ...prev,
            key: 0,
            isPlaying: false,
            currentSession: 1,
            currentBreak: 0
          }))
        }}
      >
        <Entypo name='ccw' size={34} color='white' />
      </Pressable>
    </View>
  )
}

export default TimerBar
