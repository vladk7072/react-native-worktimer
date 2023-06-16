import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { Pressable, PressableProps, Text, View } from 'react-native'

interface IButton extends PressableProps {}

const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <Pressable
      className={cn(
        'self-center mt-4 bg-primary py-3 px-8 rounded-full',
        className
      )}
      {...rest}
    >
      <Text className='font-semibold text-white text-xl'>{children}</Text>
    </Pressable>
  )
}

export default Button
