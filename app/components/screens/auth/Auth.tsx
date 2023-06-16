import { FC, useState } from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import {
  Keyboard,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native'

import Button from '@/components/ui/layout/Button'
import Loader from '@/components/ui/layout/Loader'

import { useAuth } from '@/hooks/useAuth'

import { IAuthFormData } from '@/types/auth.interface'
import AuthFields from './AuthFields'

const Auth: FC = () => {
  const [isReg, setIsReg] = useState(false)

  const { control, reset, handleSubmit } = useForm<IAuthFormData>({
    mode: 'onChange'
  })

  const { setUser } = useAuth()

  const onSubmit: SubmitHandler<IAuthFormData> = data => {
    setUser({
      _id: '',
      ...data
    })
    reset()
  }

  const isLoading = false

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className='items-center justify-center flex-1'>
        <View className='w-3/4'>
          <Text className='text-white text-5xl font-bold text-center'>
            {isReg ? 'Sign up' : 'Sign in'}
          </Text>

          {isLoading ? (
            <Loader />
          ) : (
            <>
              <AuthFields control={control} />
              <Button onPress={handleSubmit(onSubmit)}>Let's go!</Button>
              <Pressable
                onPress={() => setIsReg(!isReg)}
                className='self-center'
              >
                <Text className='text-opacity-60 text-white text-base mt-3'>
                  {isReg ? 'Login' : 'Register'}
                </Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Auth
